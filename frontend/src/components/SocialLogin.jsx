function SocialLogin(){
    return(
        <div className="social-login">
        <button className="social-button">
          <img src="google.svg" alt="Google" className="social-icon" />
          Google
        </button>
        <button className="social-button">
          <img src="fb.png" alt="Apple" className="social-icon" />
          Facebook
        </button>
      </div>
    );
}

export default SocialLogin;