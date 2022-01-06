<?php
require_once './mysql.inc.php';

class MemberModel{
    public function getAllMembers(){
        $sql = "SELECT  *  FROM  `member`";
        $response = Mysql::select($sql);
        return $response;
    }
    public function getMember($id){
        $sql = "SELECT  *  FROM  `member` WHERE `id`=?";
        $response = Mysql::select($sql, array($id));
        return $response;
    }
    public function newMember($id, $name, $address, $birth){
        $sql = "INSERT INTO `member` (`id`, `name`, `address`, `birth`) VALUES (?, ?, ?, ?)";
        $response = Mysql::insert($sql, array($id, $name, $address, $birth));
        return $response;
    }
    public function deleteMember($id){
        $sql = "DELETE FROM `member` WHERE `id`=?";
        $response = Mysql::delete($sql, array($id));
        return $response;
    }
    public function updateMember($id, $name, $address, $birth){
        $sql = "UPDATE `member` SET `name`=?, `address`=?, `birth`=? WHERE id=?";
        $response = Mysql::update($sql, array($name, $address, $birth, $id));
        return $response;
    }
}

?>