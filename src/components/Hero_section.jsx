const Hero_section = () =>{
    return(
        <>
        <div className="hero">
            <div className="hero_text">
               <div className="heading">
                <h1>Login</h1>
                <p>Doesn't have an account yet? <a href="">Sign up</a> </p>
                </div>
                <label htmlFor="mail">Email Address</label><br />
                <input type="email" name="mail" id="mail" placeholder="you@email.com" /><br />
                <label htmlFor="password">Password</label>
                <span className="forgot"><a href="">Forgot Password?</a></span><br />
                <input type="password" name="password" id="password" placeholder="Enter 6 Character or more"/>

                <br />
                <button id="login">Login</button>
            </div>

            <div className="hero_image">
                <img src="../src/assets/woman-8589721_1280.png" alt="" />
            </div>
        </div>

        </>
    );
};

export default Hero_section;

