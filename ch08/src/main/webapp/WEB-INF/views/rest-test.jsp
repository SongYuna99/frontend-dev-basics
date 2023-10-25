<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ch08</title>
<script src="${pageContext.request.contextPath}/jquery/jquery-3.7.1.js"></script>
<!-- 보낼거 : contentType / 받을거 : dataType -->
<script>
	$(function() {
		$('#create').click(function() {
			var vo = {
				name : '둘리',
				email : 'dooly@gmail.com',
				password : '123',
				gender : 'male'
			};

			$.ajax({
				url : '${pageContext.request.contextPath}/api/user',
				type : 'post',
				dataType : 'json',
				contentType : 'application/json',
				data : JSON.stringify(vo),
				success : function(response) {
					console.log(response);
				}
			});
		});
		
		$('#read').click(function() {
			$.ajax({
				url : '${pageContext.request.contextPath}/api/user',
				type : 'get',
				dataType : 'json',
				success : function(response) {
					console.log(response);
				}
			});
		});
		
		$('#update').click(function() {
			var vo = {
				name : '둘리',
				password : 'qwerty1234',
				gender : 'male'
			};

			$.ajax({
				url : '${pageContext.request.contextPath}/api/user/10',
				type : 'put',
				dataType : 'json',
				contentType : 'application/json',
				data : JSON.stringify(vo),
				success : function(response) {
					console.log(response);
				}
			});
		});
		
		$('#delete').click(function() {
			$.ajax({
				url : '${pageContext.request.contextPath}/api/user/10',
				type : 'delete',
				dataType : 'json',
				contentType : 'application/x-www-form-urlencoded',
				data : "password=12345",
				success : function(response) {
					console.log(response);
				}
			});
		});
	});
</script>
</head>
<body>
	<h1>AJAX Test : Restful API</h1>
	<button id='create'>[C]reate(POST)</button> <br><br>
	<button id='read'>[R]ead(GET)</button> <br><br>
	<button id='update'>[U]pdate(PUT)</button> <br><br>
	<button id='delete'>[D]elete(DELETE)</button> <br><br>
	
</body>
</html>