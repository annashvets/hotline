describe("Hotline login", function() {
    it("Successfull login", function() {
      
      browser.get('https://hotline.ua/');

      

      element(by.css(".item-login a")).click();
      element(by.css(".form-item [type='email']")).sendKeys("solovko_av@ukr.net");
      element(by.css(".form-item [type='password']")).sendKeys("0682326605");
    
      element(by.css(".btn-graphite")).click();

      expect(element(by.css(".item-login .name")).getText()).toEqual('shanna');
      });

  });