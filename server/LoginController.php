<?php
require_once './LoginModel.php';
require_once './Controller.php';
require "vendor/autoload.php";
use \Firebase\JWT\JWT;

$time = 3000;
class LoginController extends Controller{
    public function checkToken(){
        global $time;
        $secret_key="ABBCCDEC52686F1AFA3D4EC2A01E9234";
        $headers = getallheaders();
        $jwt = $headers['Authorization'];
        try{ 
            $payload = (array)JWT::decode($jwt, $secret_key, array('HS256'));
            $oldpayload = $payload;
            $payload["exp"]=time() + $time;
            $refreshjwt = JWT::encode($payload,$secret_key);

            return $this->response(200, "Token alived", $payload['Auth'], $refreshjwt, $payload['temp']);      
        }catch (Exception $e){
            return $this->response(401, "Token invalid");
        }
    }
    public function doLogin(){
        global $time;
        $id = $_POST['id'];
        $password = $_POST['password'];
        $lm = new LoginModel();
        //$re = null;
        $re = $lm -> checkaccount($id,$password);
        
        $secret_key = "ABBCCDEC52686F1AFA3D4EC2A01E9234";
        $issuer_claim = "http://localhost";
        $audience_claim = "http://localhost";
        $issuedat_clain = time();//issued at
        $expire_claim = $issuedat_clain + $time;
        $payload = array(
            "iss" => $issuer_claim,
            "aud"=> $audience_claim,
            "iat"=> $issuedat_clain,
            "exp"=> $expire_claim,
            "data"=> array(
                "id" =>$id,
                "password" =>$password,
            ),
            "Auth"=>$re['result'],
            "temp"=>$re['userinfo'],
        );
        $jwt = JWT::encode($payload,$secret_key);//標準化輸出
        if($re['status']==200)   //判斷帳密正確
        //if(true)
            return $this->response(200, $re['message'], $re['result'], $jwt, $re);
        else
            return $re;
    }
    public function register(){
        
    }
}
?>