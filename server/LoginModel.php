<?php
require_once './mysql.inc.php';

class LoginModel{
    public function checkaccount($id, $password){
        $sql = "SELECT person.EmpId, person.Birth, employee.EmpName, employee.JobTitle, dept.DeptName
        FROM employee, dept, person
        WHERE 	employee.DeptId = dept.DeptId
            AND person.EmpId = employee.EmpId
            AND	person.EmpId=?";
            
        $response = (array)Mysql::select($sql, array($id));
        //{"status":200,"message":"\u67e5\u8a62\u6210\u529f","result":[],"jwt":null}
        if(isset($response['result'][0]))
            $userinfo = $response['result'][0];
        else
            $userinfo = $response['result'];
        
        if(!empty($userinfo)){
            if($userinfo['Birth'] == $password)
                return Mysql::response(200, 'success', 1, null, $userinfo = $userinfo);
            else
                return Mysql::response(201,'passwordError', $response);
        }
        else{
            return Mysql::response(201,'usernameError');
        }
        return($response);
    }
    public function newaccount($id, $name, $password, $Auth){
        $sql = "INSERT INTO `account` (`id`, `name`, `password`, `Auth`) VALUES (?, ?, ?, ?)";
        $response = Mysql::insert($sql, array($id, $name, $password, $Auth));
        return $response;
    }
    public function deleteaccount($id){
        $sql = "DELETE FROM `account` WHERE `id`=?";
        $response = Mysql::delete($sql, array($id));
        return $response;
    }
    public function updateaccount($id, $name, $password, $Auth){
        $sql = "UPDATE `account` SET  `name`=?, `password`=?, `Auth`=? WHERE id=?";
        $response = Mysql::update($sql, array($name, $password, $Auth, $id));
        return $response;
    }
}

?>