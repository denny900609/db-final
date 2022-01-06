<?php
require_once './MemberModel.php';
require_once './Controller.php';
class MemberController extends Controller{
    public function doSelectAction(){
        $sm = new MemberModel();
        if(isset($_POST['id'])){
           $response = $sm->getMember($_POST['id']);
        }
        else{
            $response = $sm->getAllMembers();
        }
        return $response;
     }
    public function doDeleteAction(){
        $id = $_POST['id'];
        $sm = new MemberModel();
        $response = $sm->deleteMember($id);
        return $response;
    }
    public function doInsertAction(){
        $id = $_POST['id']; 
        $name = $_POST['name'];
        $address = $_POST['address'];
        $birth = $_POST['birth'];
        $sm = new MemberModel();
        $response = $sm->newMember($id, $name, $address, $birth);
        return $response;
    }
    public function doUpdateAction(){
        $id = $_POST['id']; 
        $name = $_POST['name'];
        $address = $_POST['address'];
        $birth = $_POST['birth'];
        $sm = new MemberModel();
        $response = $sm->updateMember($id, $name, $address, $birth);
        return $response;
    }
}
