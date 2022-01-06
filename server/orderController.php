<?php
require_once './orderModel.php';
require_once './Controller.php';
class orderController extends Controller{
    public function doSelectAction(){
        $sm = new orderModel();
        if(isset($_GET['choicetype'])){
            if(($_GET['choicetype'])=="seq"){
                $response = $sm->getSeqOrder($_GET['EmpId'],$_GET['keyword']);
                }
            else if (($_GET['choicetype'])=="OrderId"){
                    $response = $sm->getOrderIdOrder($_GET['EmpId'],$_GET['keyword']);
                }
            else if (($_GET['choicetype'])=="CustId"){
                    $response = $sm->getCustIdOrder($_GET['EmpId'],$_GET['keyword']);
                }
            else if (($_GET['choicetype'])=="OrderDate"){
                    $response = $sm->getOrderDateOrder($_GET['EmpId'],$_GET['keyword']);
                }
        }
        else if(isset($_POST['seq'])){
            $response = $sm->getorder($_POST['seq']);
         }
        else{
            $response = $sm->getAllorders($_GET['EmpId']);
        }
        
        return $response;
     }
    public function doDeleteAction(){
        $seq = $_POST['seq'];
        // $OrderId = $_POST['OrderId'];
        $sm = new orderModel();
        $response = $sm->deleteorder($seq);
        // if ($response['status']==200){
        //     $response = $sm->deletedetail($OrderId);
        // }
        return $response;
    }
    public function doInsertAction(){
        // $seq = $_POST['seq']; 
        $OrderId = $_POST['OrderId'];
        $EmpId = $_POST['EmpId'];
        $CustId = $_POST['CustId'];
        $OrderDate = $_POST['OrderDate'];
        $Descript = $_POST['Descript'];
        $sm = new orderModel();
        $response = $sm->neworder($OrderId, $EmpId, $CustId, $OrderDate, $Descript);
        return $response;
    }
    public function doUpdateAction(){
        $seq = $_POST['seq']; 
        $OrderId = $_POST['OrderId'];
        $EmpId = $_POST['EmpId'];
        $CustId = $_POST['CustId'];
        $OrderDate = $_POST['OrderDate'];
        $Descript = $_POST['Descript'];
        $sm = new orderModel();
        $response = $sm->updateorder($seq, $OrderId, $EmpId, $CustId, $OrderDate, $Descript);
        return $response;
    }
}
