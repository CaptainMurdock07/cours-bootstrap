<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Insert title here</title>
</head>
<body>

	<c:set var="nomComplet" value="${ prenom } ${ nom }" scope="page" />

	<%@ include file="menu.jsp" %>

	<p>
		<c:choose>
	  		<c:when test="${ civilite == 'Mr' }">Bonjour Monsieur </c:when>
	  		<c:when test="${ civilite == 'Mme' }">Bonjour Madame </c:when>
			<c:when test="${ civilite == 'Mlle' }">Bonjour Mademoiselle </c:when>
			<c:otherwise>Bonjour </c:otherwise>
		</c:choose>
		<c:out value="${ nomComplet }" />
	</p>
		
</body>
</html>

