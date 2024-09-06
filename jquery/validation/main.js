$("form").validate({
        errorClass : "bad",
        errorElement: "em",
        rules: {
          username: {
            required: true,
            minlength : 2
          },
          useremail: {
            required: true,
            email: true
          }
        },

        messages: 
        {
            username: {
                required: "이름필수",
                minlength : "최소 2글자이상"
              },
            useremail: {
              required: "이메일도 필수",
              email: "이메일 형식에 맞춰라"
            }
          }

});

