<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
</head>
<body>
	<%@ include file="menu.jsp" %>
	
	<p>Ceci est ma première JSP !</p>
	
	<p>Bonjour ${ nom }</p>
	
	<p>Bonjour ${ empty nom }</p>
	
	<p>Bonjour ${ empty nom ? "Madame, Monsieur" : nom }</p>
	
	<p>Bonjour ${ !empty nom and nom=="Yoda" ? "et que la force soit avec toi !" : nom }</p>
	
	<p>${ maVariable[0] }</p>
	<p>${ maVariable[1] }</p>
	<p>${ maVariable[2] }</p>
	
</body>
</html>

