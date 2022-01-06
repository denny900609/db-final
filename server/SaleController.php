<?php
require_once './SaleModel.php';
require_once './Controller.php';
class saleController extends Controller{
    public function doSelectAction(){
        $sm = new saleModel();
        if(isset($_POST['orderid'])){
           $response = $sm->getsale($_POST['orderid']);
        }
        else{
            $response = $sm->getAllsales($_GET['date1'], $_GET['date2']);
        }
        return $response;
     }
    public function doDeleteAction(){
        $orderid = $_POST['orderid'];
        $sm = new saleModel();
        $response = $sm->deletesale($orderid);
        return $response;
    }
    public function doInsertAction(){
        $orderid = $_POST['orderid']; 
        $id = $_POST['id'];
        $date = $_POST['date'];
        $sm = new saleModel();
        $response = $sm->newsale($orderid, $id, $date);
        return $response;
    }
    public function doUpdateAction(){
        $orderid = $_POST['orderid']; 
        $id = $_POST['id'];
        $date = $_POST['date'];
        $sm = new saleModel();
        $response = $sm->updatesale($orderid, $id, $date);
        return $response;
    }
}
