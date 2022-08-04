<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Insert title here</title>
</head>
<body>

	<%@ include file="menu.jsp" %>

	<c:forEach var="i" begin="1" end="8" step="2">
		<p>Je sais compter jusqu'à <c:out value="${i}"/></p>
	</c:forEach>
	<br />
	
	<c:forEach items="${ hugos }" var="hugo" begin="0" end="2" varStatus="status">
		 <p>
		 	count : <c:out value="${status.count}"/> -  
		 	index :<c:out value="${status.index}"/> - 
		 	current : <c:out value="${status.current}"/> - 
		 	first : <c:out value="${status.first}"/> - 
		 	last : <c:out value="${status.last}"/> - 
		 	livre : <c:out value="${hugo}"/>
		 </p>
	</c:forEach>
	<br />
	
	<c:forTokens items="${ zolas }" var="zola" delims="/ " begin="1" end="6" varStatus="status">
		 <p>
		 	count : <c:out value="${status.count}"/> -  
		 	index :<c:out value="${status.index}"/> - 
		 	current : <c:out value="${status.current}"/> - 
		 	first : <c:out value="${status.first}"/> - 
		 	last : <c:out value="${status.last}"/> - 
		 	livre : <c:out value="${zola}"/>
		 </p>
	</c:forTokens>
		

</body>
</html>

