<?php
class Mysql
{
    static $dbHost;
    static $dbName;
    static $dbUser;
    static $dbPassword;
    static function openDB()
    {
        $dsn = sprintf("mysql:host=%s;dbname=%s;charset=utf8", self::$dbHost, self::$dbName);
        try {
            $conn = new PDO($dsn, self::$dbUser, self::$dbPassword);
            $response['status'] = 200;
            $response['result'] = $conn;
        } catch (PDOException $e) {
            $response['status'] = $e->getCode();
            $response['message'] = $e->getMessage();
        }
        return ($response);
    }
    static function select($sql, $params = NULL)
    {
        $resp = self::openDB();
        if ($resp['status'] == 200) {
            try {
                $conn = $resp['result'];
                $stmt = $conn->prepare($sql);
                $result = $stmt->execute($params);
                if ($result) {
                    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    return self::response(200,  "查詢成功", $rows );
                } else {
                    return self::response(400,  "SQL錯誤");
                }
            } catch (PDOException $e) {
                return self::response($e->getCode(),  $e->getMessage());
            }
        }
    }
    static function insert($sql, $params)
    {
        $resp = self::openDB();
        if ($resp['status'] == 200) {
            try {
                $conn = $resp['result'];
                $stmt = $conn->prepare($sql);
                $result = $stmt->execute($params);
                if ($result) {
                    $count = $stmt->rowCount();
                    return ($count < 1) ? self::response(204,  "新增失敗") : self::response(200,  "新增成功");
                } else {
                    return self::response(400, "SQL錯誤");
                }
            } catch (PDOException $e) {
                return self::response($e->getCode,  $e->getMessage());
            }
        }
    }
    static function update($sql, $params)
    {
        $resp = self::openDB();
        if ($resp['status'] == 200) {
            try {
                $conn = $resp['result'];
                $stmt = $conn->prepare($sql);
                $result = $stmt->execute($params);
                if ($result) {
                    $count = $stmt->rowCount();
                    return ($count < 1) ? self::response(204,  "修改失敗") : self::response(200,  "修改成功");
                } else {
                    return self::response(400, "SQL錯誤");
                }
            } catch (PDOException $e) {
                return self::response($e->getCode,  $e->getMessage());
            }
        }
    }
    static function delete($sql, $params)
    {
        $resp = self::openDB();
        if ($resp['status'] == 200) {
            try {
                $conn = $resp['result'];
                $stmt = $conn->prepare($sql);
                $result = $stmt->execute($params);
                if ($result) {
                    $count = $stmt->rowCount();
                    return ($count < 1) ? self::response(204,  "刪除失敗") : self::response(200,  "刪除成功");
                } else {
                    return self::response(400, "SQL錯誤");
                }
            } catch (PDOException $e) {
                return self::response($e->getCode,  $e->getMessage());
            }
        }
    }

    static function response($status, $message, $result = null, $jwt = null, $userinfo = null)
    {
        $resp['status'] = $status;
        $resp['message'] = $message;
        $resp['result'] = $result;
        $resp['jwt'] = $jwt;
        $resp['userinfo'] = $userinfo;
        return $resp;
    }
}
