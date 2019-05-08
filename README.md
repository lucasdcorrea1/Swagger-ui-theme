# Swagger-ui-theme
# API Rest .NET CORE 
easy implementation template for swagger ui

# Rota
        

Startp.cs

    code 
     
    ├── API
        ├── wwwroot
                ├──docs
                    ├──css
                    ├──index        
                    ├──js
                    ├──img
                    ├──favicon-16x16.png
                    ├──favicon-32x32.png
                    
                    
        app.UseAuthentication();
        app.UseStaticFiles();
        app.UseHttpsRedirection();
        app.UseCors("SiteCorsPolicy");



        app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "company Authorization API");
                c.RoutePrefix = "docs";
                c.DocumentTitle = "Name API";
                c.InjectStylesheet("css/swagger.css");
                c.InjectStylesheet("css/theme-material.css");
                c.InjectStylesheet("css/style.css");
                c.InjectStylesheet("https://use.fontawesome.com/releases/v5.7.0/css/all.css");
                c.InjectStylesheet("https://fonts.googleapis.com/css?family=Maven+Pro");
                c.InjectJavascript("https://code.jquery.com/jquery-3.3.1.min.js");
                c.InjectJavascript("js/on-complete.js");

            });
