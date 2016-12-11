+++
date = "2016-12-12T15:35:36-05:00"
draft = false
title = "Email Checker"
type = "page"
url = "/emailchecker"
+++
<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<style>        
    .checker_container input, button {
        padding: 7px;
        border-radius: 3px;
        font-size: 20px;
        border: 1px #aaa solid;
        margin-top: 15px;
    }

    .checker_container button {
        background-color: #336699;
        color: #fff;
        cursor: pointer;
        border: 0px;
    }

    #upload-file-form {
        background-color: #fafafa;
        border: 1px solid #ddd;
        border-radius: 3px;
        padding: 20px;
        max-width: 700px;
        width: 80%;
    }

    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    .inputfile + label {
        color: #336699;
        display: inline-block;
    }

    .inputfile + label {
        cursor: pointer; /* "hand" cursor */
    }

    .description{
        padding-bottom: 20px;
        font-size: 16px;
        color: #777;
    }

    .email{
        width: 95%;
    }
</style>

<div class="checker_container">
    <form id="upload-file-form" method="POST" enctype="multipart/form-data" action="/uploadFile">
        <div class="description">
            Sending emails to non-existent addresses causes big bounce rate, as a result your emails will go to spam more often. <br/><br/>
            Upload a contact list in csv with a column <b>email</b>, the email checker will verify all emails that exist and send you back a file with only valid records.
        </div>
        <div class="roww">
            <input id="upload-file-input" class="inputfile" type="file" name="uploadfile" required="required"
                   accept="text/csv"/>
            <label for="upload-file-input"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> <span>Choose a file…</span></label>
        </div>
        <div class="roww">
            <input id="email" class="email" type="email" name="email" required="required" placeholder="Email to send filtered file"/>
        </div>
        <span id="upload-file-message"></span>
        <button type="submit" id="upload-file-btn">Upload</button>
    </form>
    <div id="message"></div>    
</div>

<script>

    // bind the on-change event for the input element (triggered when a file
    // is chosen)
    $(document).ready(function () {
        $("#upload-file-form").on("submit", uploadFile);
    });

    /**
     * Upload the file sending it via Ajax at the Spring Boot server.
     */
    function uploadFile() {

        var formData = new FormData($("#upload-file-form")[0]);
        //formData.append("email", $("#email").val());

        $.ajax({
            url: "https://emailchecker.intagent.io/uploadFile",
            type: "POST",
            data: formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            cache: false,
            success: function () {

            },
            error: function () {

            }
        });

        _agile.set_email($("#email").val());
        _agile.add_tag('emailchecker');

        $("#upload-file-form").text("Your file is being processed, you'll be notified by email.");

        return false;


    } // function uploadFile


    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
        var label = input.nextElementSibling,
                labelVal = label.innerHTML;

        input.addEventListener('change', function (e) {
            var fileName = '';
            if (this.files.length > 1) {
                fileName = ( this.getAttribute('data-multiple-caption') || '' ).replace('{count}', this.files.length);
            } else {
                fileName = e.target.value.split('\\').pop();
            }

            if (fileName) {
                label.innerHTML = fileName;
            } else {
                label.innerHTML = labelVal;
            }

        });
    });


</script>