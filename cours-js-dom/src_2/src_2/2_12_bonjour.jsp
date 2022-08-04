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

	<c:if test="${ nom == 'Bond' }">
		<p>Vous êtes l'agent 007, vous avez le permis de tuer !</p>
	</c:if>
	
</body>
</html>

