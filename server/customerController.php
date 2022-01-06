<?php
require_once './customerModel.php';
require_once './Controller.php';
class customerController extends Controller
{
    
    public function DoSelectAction()
    {
        $sm = new customerModel();
        if(isset($_POST['id'])){
           $response = $sm->getcustomer($_POST['id']);
        }
        else{
            $response = $sm->getAllcustomers();
        }
        return $response;
    }

    public function DoDeleteAction()
    {
        $id = $_POST['id'];
        $sm = new customerModel();
        $response = $sm->deletecustomer($id);
        return $response;
    }
    public function DoInsertAction()
    {
        $id = $_POST['ProdID'];
        $name = $_POST['ProdName'];
        $price = $_POST['UnitPrice'];
        $kcal = $_POST['Cost'];

        $sm = new customerModel();
        $response = $sm->newcustomer($id, $name, $price, $kcal);
        return $response;
    }
    public function DoUpdateAction()
    {
        $ProdID = $_POST['ProdID'];
        $ProdName = $_POST['ProdName'];
        $UnitPrice = $_POST['UnitPrice'];
        $Cost = $_POST['Cost'];

        $sm = new customerModel();
        $response = $sm->updatecustomer($ProdID, $ProdName, $UnitPrice, $Cost);
        return $response;
    }
}
?>