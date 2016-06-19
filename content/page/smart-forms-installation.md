---
title: Smart Forms for HubSpot
author: intagent
type: page
date: 2015-11-06
url: smart-forms-installation

---
### Smart Forms for HubSpot can help you increase signup conversion by 17%.

You probably know, that popup forms are very effective in terms of converting your visitors to subscribers, but at the same time they can be very annoying to users that can lead to a high bounce rate.

Smart Forms provides a compromise of effective and user friendly way to increase forms conversion rate.

### Features

  * HubSpot native.
  * Built specifically for HubSpot, you can use like any other module.
  * Mobile ready
  * Slide in form, doesn&#8217;t block content
  * Timed based appearance
  * If a user closes the form – it wouldn&#8217;t show up for the next 24 hours.
  * If a user submitted the form, the popup for this specific form will never be shown again.
  * Scroll-Based (in development)
  * Exit-Intent (in development)

[<img class="aligncenter wp-image-18 size-full" src="http://intagent.wpengine.com/wp-content/uploads/2015/11/smart_forms.png" alt="smart_forms" width="954" height="692" srcset="/img/smart_forms.png 954w, /img/smart_forms-300x218.png 300w, /img/smart_forms-644x467.png 644w" sizes="(max-width: 954px) 100vw, 954px" />][1]



&nbsp;

### Installation

{{< youtube SJQAtTi2B3Y >}}

<br/>

1. To install Smart Forms and use it as HubSpot module you have to create a custom module first. Go to you HubSpot portal an then:

<p style="padding-left: 30px;">
  <em style="background-color: #f7f7b5;">Content → Design Manager →  Custom Modules → New Custom Module</em>
</p>

<p style="padding-left: 30px;">
  Name it as &#8220;Smart Forms&#8221;.
</p>

2. Then to control your forms we need to add 3 text fields: **Form Id**,**Title**, **Trigger Time.** Make sure to use the same names.

<p style="padding-left: 30px;">
  <a href="http://intagent.wpengine.com/wp-content/uploads/2015/11/new_field.png"><img class="alignnone wp-image-16 size-full" src="http://intagent.wpengine.com/wp-content/uploads/2015/11/new_field.png" alt="new_field" width="730" height="624" srcset="/img/new_field.png 730w, /img/new_field-300x256.png 300w, /img/new_field-644x550.png 644w" sizes="(max-width: 730px) 100vw, 730px" /></a><strong><br /> </strong>
</p>

3. Copy this code into the module body:

<pre class="theme:github font-size:14 inline-margin:10 lang:default decode:true ">&lt;link rel="stylesheet" type="text/css" href="https://integrationagent.s3.amazonaws.com/smartforms/smartforms.min.css" /&gt;
&lt;script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"&gt;&lt;/script&gt;
&lt;script src="https://integrationagent.s3.amazonaws.com/smartforms/smartforms.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
    $(document).ready( function() {
        HSPopup.init({
            formId: '{{widget.form_id}}',
            portalId: '{{ hub_id }}',
            title: '{{widget.title}}',
            triggerTime: '{{widget.trigger_time}}'
        });

        HSPopup.showPopup();
    });
&lt;/script&gt;
&lt;img src="https://integrationagent.s3.amazonaws.com/img/smart_forms.png" class="smart_forms_logo" /&gt;

</pre>

The module will look like this:

<img class="aligncenter wp-image-17 size-full" src="http://intagent.wpengine.com/wp-content/uploads/2015/11/custom_module.png" alt="custom_module" width="1283" height="413" srcset="/img/custom_module.png 1283w, /img/custom_module-300x97.png 300w, /img/custom_module-644x207.png 644w" sizes="(max-width: 1283px) 100vw, 1283px" />

### To add the module to a page

4. Drag and drop &#8220;Smart Forms&#8221; module to any place on the page.

[<img class="aligncenter wp-image-20 size-full" src="http://intagent.wpengine.com/wp-content/uploads/2015/11/module2.png" alt="module2" width="359" height="409" srcset="/img/module2.png 359w, /img/module2-263x300.png 263w" sizes="(max-width: 359px) 100vw, 359px" />][2]

5. Let&#8217;s click on edit button and configure the form.

<img class="aligncenter wp-image-19 size-full" src="http://intagent.wpengine.com/wp-content/uploads/2015/11/module3.png" alt="module3" width="527" height="415" srcset="/img/module3.png 527w, /img/module3-300x236.png 300w" sizes="(max-width: 527px) 100vw, 527px" />

**Form Id: **Id of the HubSpot form you want to embed, to get the Id, open form editor and copy id from the url, e.g.
  
https://app.hubspot.com/forms/1670983/<span style="background-color: #f7f7b5; text-decoration: underline">c3794ad3-f6a7-4c98-841d-98062636baab</span>/edit/

**Title**: The text that will be shown as form header.

**Trigger Time**: Time in seconds for the form to appear.

That&#8217;s it, in our case the form will show up in 30 seconds, it will automatically disappear after form completion.

### To add the module to a template

Drag and drop &#8220;HubL Template&#8221; module to any spot on the template, modify the options with the following code:

<pre class="lang:default decode:true ">{% custom_widget "smart_forms_widget" widget_name='Smart Forms' form_id='[FORM_ID]', title='[TITLE]', trigger_time='[SECONDS]' %}</pre>


&nbsp;

 [1]: http://intagent.wpengine.com/wp-content/uploads/2015/11/smart_forms.png
 [2]: http://intagent.wpengine.com/wp-content/uploads/2015/11/module2.png