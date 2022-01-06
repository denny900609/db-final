<?php
require_once './mysql.inc.php';

class orderModel{
    public function getAllorders($EmpId){
        $sql = "SELECT  *  
        FROM  `salesorder` 
        WHERE salesorder.EmpId = ?
        ORDER BY salesorder.seq ASC";
        $response = Mysql::select($sql, array($EmpId));
        return $response;
    }
    public function getorder($seq){
        $sql = "SELECT  *  FROM  `salesorder` WHERE `seq`=?";
        $response = Mysql::select($sql, array($seq));
        return $response;
    }
    public function getSeqOrder($EmpId,$seq){
        $sql = "SELECT  *  FROM  `salesorder` WHERE salesorder.EmpId = ? AND `seq` = ? ORDER BY salesorder.seq ASC ";
        $response = Mysql::select($sql, array($EmpId,$seq));
        return $response;
    }
    public function getOrderIdOrder($EmpId,$OrderId){
        $sql = "SELECT  *  FROM  `salesorder` WHERE salesorder.EmpId = ? AND `OrderId` = ? ORDER BY salesorder.seq ASC ";
        $response = Mysql::select($sql, array($EmpId,$OrderId));
        return $response;
    }
    public function getCustIdOrder($EmpId,$CustId){
        $sql = "SELECT  *  FROM  `salesorder` WHERE salesorder.EmpId = ? AND `CustId` = ? ORDER BY salesorder.seq ASC ";
        $response = Mysql::select($sql, array($EmpId,$CustId));
        return $response;
    }
    public function getOrderDateOrder($EmpId,$OrderDate){
        $sql = "SELECT  *  FROM  `salesorder` WHERE salesorder.EmpId = ? AND `OrderDate` = ? ORDER BY salesorder.seq ASC ";
        $response = Mysql::select($sql, array($EmpId,$OrderDate));
        return $response;
    }
    public function neworder($OrderId, $EmpId, $CustId, $OrderDate, $Descript){
        $sql = "INSERT INTO `salesorder` (`OrderId`, `EmpId`, `CustId`, `OrderDate`, `Descript`) VALUES (?, ?, ?, ?, ?)";
        $response = Mysql::insert($sql, array($OrderId, $EmpId, $CustId, $OrderDate, $Descript));
        return $response;
    }
    public function deleteorder($seq){
        $sql = "DELETE FROM `salesorder` WHERE `seq`=?";
        $response = Mysql::delete($sql, array($seq));
        return $response;
    }
    public function deletedetail($id){
        $sql = "DELETE FROM `orderdetail` WHERE `OrderId`=?";
        $response = Mysql::delete($sql, array($id));
        return $response;
    }

    public function updateorder($seq, $OrderId, $EmpId, $CustId, $OrderDate, $Descript){
        $sql = "UPDATE `salesorder` SET `OrderId`=?, `EmpId`=?, `CustId`=?, `OrderDate`=?, `Descript`=? WHERE seq=?";
        $response = Mysql::update($sql, array($OrderId, $EmpId, $CustId, $OrderDate, $Descript, $seq));
        return $response;
    }
}

?>