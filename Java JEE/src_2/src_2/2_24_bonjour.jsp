<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Insert title here</title>
</head>
<body>
	<%@ include file="menu.jsp" %>

	<form method="post" action="bonjour">
		<p>
			<label for="nom">Entrer votre nom</label>
			<input type="text" name="nom" id="nom" />
		</p>
		<p>
			<label for="pwd">Mot de passe</label>
			<input type="password" name="pwd" id="pwd" />
		</p>
		<input type="submit" /> 
	</form>
	
	<p><c:out value="${ form.message }" /></p>
	<c:if test="${ form.loginId > 0 }">
		<p>Bonjour, vous êtes bien connecté, votre ID est <c:out value="${ form.loginId }" /></p>
	</c:if>

</body>
</html>

