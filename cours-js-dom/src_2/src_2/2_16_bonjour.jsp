<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Insert title here</title>
</head>
<body>

	<%@ include file="menu.jsp" %>

	<form method="post" action="/demoJEE/bonjour">
		<label for="auteur">Entrer le nom de votre auteur préféré</label>
		<input type="text" name="auteur" id="auteur" />
		<input type="submit" /> 
	</form>
	
	<c:if test="${ !empty auteur }">
		<p>Bonjour, votre auteur préféré est <c:out value="${ auteur }" /></p>
	</c:if>

</body>
</html>

