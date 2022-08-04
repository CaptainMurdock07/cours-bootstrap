package test1.forms;

import javax.servlet.http.HttpServletRequest;
import gescom.Employe;

public class LoginForm {

		private int loginId;
		private String message;
		
		public void login(HttpServletRequest request)  {
			try {
				loginId = Employe.login(request.getParameter("nom"), request.getParameter("pwd"));
				if (this.loginId==0) {
					this.message = "Identifiants incorrects !";
				}
			} catch (Exception e) {
				this.message = e.getMessage();
			}
		}
		public int getLoginId() {
			return loginId;
		}
		public void setLoginId(int loginId) {
			this.loginId = loginId;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
}

