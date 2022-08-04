<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%@ include file="menu.jsp" %>
	
	<p>${ name }</p>
	<p><c:out value="${ name }" /></p>
	<p><c:out value="${ name }" escapeXml="false" /></p>
	
	<p>bonjour <c:out value="${ name }" default="Madame, Monsieur" /></p>
	<p>bonjour <c:out value="${ name }">Madame, Monsieur</c:out></p>
	
	
	
</body>
</html>