<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Insert title here</title>
</head>
<body>

	<c:set var="nomComplet" value="${ genre } ${ prenom } ${ nom }" scope="page" />

	<%@ include file="menu.jsp" %>

	<p>Bonjour <c:out value="${ nomComplet }" />,</p>
	<p>Si vous n'êtes pas <c:out value="${ nomComplet }" />, merci de cliquer sur ce lien.</p>
	
</body>
</html>

