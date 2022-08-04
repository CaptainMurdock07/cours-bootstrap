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
		<label for="auteurs">Entrer le nom de votre auteur préféré</label>
		<select name="auteurs">
			<c:forEach items="${ auteurs }" varStatus="status">
				<option value="<c:out value="${status.index}"/>"><c:out value="${status.current}"/></option>
			</c:forEach>
		</select>
		<input type="submit" /> 
	</form>
	
	<c:if test="${ !empty auteur }">
		<p>Bonjour, votre auteur préféré est <c:out value="${ auteur }" /></p>
	</c:if>

</body>
</html>

