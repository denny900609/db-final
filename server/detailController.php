<?php
require_once './detailModel.php';
require_once './Controller.php';
class detailController extends Controller{
    public function doSelectAction(){
        $sm = new detailModel();
        if(isset($_POST['seq'])){
           $response = $sm->getorder($_POST['seq']);
        }
        else{
            $response = $sm->getAllorders($_GET['OrderId']);
        }
        return $response;
     }
    public function doDeleteAction(){
        $OrderId = $_POST['seq'];
        $sm = new detailModel();
        $response = $sm->deleteorder($OrderId);
        return $response;
    }
    public function doInsertAction(){
        $OrderId = $_POST['OrderId'];
        $ProdId = $_POST['ProdId'];
        $Qty = $_POST['Qty'];
        $Discount = $_POST['Discount'];
        $sm = new detailModel();
        $response = $sm->neworder($OrderId, $ProdId, $Qty, $Discount);
        return $response;
    }
    public function doUpdateAction(){
        $seq = $_POST['seq']; 
        $OrderId = $_POST['OrderId'];
        $ProdId = $_POST['ProdId'];
        $Qty = $_POST['Qty'];
        $Discount = $_POST['Discount'];
        $sm = new detailModel();
        $response = $sm->updateorder($seq, $OrderId, $ProdId, $Qty, $Discount);
        return $response;
    }
}
