/*
    The function below is used to:
    1. validate the contact form
    2. submit the contact form
    3. display the result from submitting the form
*/

import React from 'react';

export default function sendEmail(event) {
  event.preventDefault();

  var error = false;

  var name = $('#name').val();
  if(name == "" || name == " ") {
      $('#name').css('background-color', '#f2dede');
      $('#name').parent().addClass('has-error');
      error = true;
  } else {
      $('#name').css('background-color', '#fff');
      $('#name').parent().removeClass('has-error');
  }

  var checkEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var email = $('#email').val();
  if (email == "" || email == " ") {
      $('#email').css('background-color', '#f2dede');
      $('#email').parent().addClass('has-error');
      error = true;
  } else if (!checkEmail.test(email)) {
      $('#email').css('background-color', '#f2dede');
      $('#email').parent().addClass('has-error');
      error = true;
  } else {
      $('#email').css('background-color', '#fff');
      $('#email').parent().removeClass('has-error');
  }

  var message = $('#message').val();
  if(message == "" || message == " ") {
      $('#message').css('background-color', '#f2dede');
      $('#message').parent().addClass('has-error');
      error = true;
  } else {
      $('#message').css('background-color', '#fff');
      $('#message').parent().removeClass('has-error');
  }

  var data_string = $('#contact-form').serialize();

  if (error == false) {
      console.log('BEFORE AJAX -- data_string is: ', data_string);
      $.ajax({
          type: "POST",
          url: "/send_message",
          data: data_string,
          timeout: 6000,
          error: function(request,error) {
              if (error == "timeout") {
                  $('#contact-error').slideDown('slow');
                  $('#contact-error span').text('Timed out when contacting server.');
                  setTimeout(function() {
                      $('#contact-error').slideUp('slow');
                  }, 10000);
              }
              else {
                console.log('POST ERROR INFO: ', error);
                  $('#contact-error').slideDown('slow');
                  $('#contact-error span').text('Something is not working. Please try again.');
                  setTimeout(function() {
                      $('#contact-error').slideUp('slow');
                  }, 10000);
              }
          },
          success: function() {
              $('#contact-success').slideDown('slow');
              $('#contact-success span').text('Message sent.');
              setTimeout(function() {
                  $('#contact-success').slideUp('slow');
              }, 10000);
              $('#name').val('');
              $('#email').val('');
              $('#message').val('');
          }
      });
  } else {
      $('#contact-error').hide();
      $('#contact-success').hide();
  }
};
