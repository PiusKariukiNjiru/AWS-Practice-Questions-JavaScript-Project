(function() {
  var questions = [{
    question: "A company has refactored a legacy application to run as two microservices using Amazon ECS. The application processes data in two parts and the second part of the process takes longer than the first.How can a solutions architect integrate the microservices and allow them to scale independently?",
    choices: ["Implement code in microservice 1 to publish data to an Amazon SNS topic. Implement code in microservice 2 to subscribe to this topic", "Implement code in microservice 1 to send data to Amazon Kinesis Data Firehose. Implement code in microservice 2 to read from Kinesis Data Firehose", "Implement code in microservice 1 to send data to an Amazon SQS queue. Implement code in microservice 2 to process messages from the queue", "Implement code in microservice 1 to send data to an Amazon S3 bucket. Use S3 event notifications to invoke microservice 2"],
    correctAnswer: 2
  }, {
    question: "A solutions architect is optimizing a website for real-time streaming and on-demand videos. The website’s users are located around the world and the solutions architect needs to optimize the performance for both the real-time and on-demand streaming. Which service should the solutions architect choose?",
    choices: ["Amazon CloudFront", "Amazon S3 Transfer Acceleration", "AWS Global Accelerator", "Amazon Route 53"],
    correctAnswer: 0
  }, 
  {
    question: "An application is running on Amazon EC2 behind an Elastic Load Balancer (ELB). Content is being published using Amazon CloudFront and you need to restrict the ability for users to circumvent CloudFront and access the content directly through the ELB. How can you configure this solution?",
    choices: ["Use a Network ACL to restrict access to the ELB", "Create an Origin Access Identity (OAI) and associate it with the distribution", "Use signed URLs or signed cookies to limit access to the content", "Create a VPC Security Group for the ELB and use AWS Lambda to automatically update the CloudFront internal service IP addresses when they change"],
    correctAnswer: 3
  },
  
  {
    question: "An application is hosted on the U.S west coast. Users there have no problems, but users on the east coast are experiencing performance issues. The users have reported slow response times with the search bar autocomplete and display of account listings. How can you improve the performance for users on the east coast?",
    choices: ["Create a DynamoDB Read Replica in the U.S east region", "Host the static content in an Amazon S3 bucket and distribute it using CloudFront", "Create an ElastiCache database in the U.S east region", "Setup cross-region replication and use Route 53 geolocation routing"],
    correctAnswer: 2
  },
  
  
  {
    question: "A web application has recently been launched on AWS. The architecture includes two tier with a web layer and a database layer. It has been identified that the web server layer may be vulnerable to cross-site scripting (XSS) attacks. What should a solutions architect do to remediate the vulnerability?",
    choices: ["Create an Application Load Balancer. Put the web layer behind the load balancer and use AWS Shield Standard", "Create an Application Load Balancer. Put the web layer behind the load balancer and enable AWS WAF", "Create a Network Load Balancer. Put the web layer behind the load balancer and enable AWS WAF", "Create a Classic Load Balancer. Put the web layer behind the load balancer and enable AWS WAF"], 
    correctAnswer: 1
  },
  
  {
    question: "A Solutions Architect must design a storage solution for incoming billing reports in CSV format. The data will be analyzed infrequently and discarded after 30 days. Which combination of services will be MOST cost-effective in meeting these requirements?",
    choices: ["Use AWS Data Pipeline to import the logs into a DynamoDB table", "Import the logs into an RDS MySQL instance", "Write the files to an S3 bucket and use Amazon Athena to query the data", "Import the logs to an Amazon Redshift cluster"], 
    correctAnswer: 2
  },
  
  
  
  {
    question: "A solutions architect is designing a two-tier web application. The application consists of a public-facing web tier hosted on Amazon EC2 in public subnets. The database tier consists of Microsoft SQL Server running on Amazon EC2 in a private subnet. Security is a high priority for the company. How should security groups be configured in this situation? (Select TWO.)",
    choices: ["Configure the security group for the database tier to allow outbound traffic on ports 443 and 1433 to the security group for the web tier", "Configure the security group for the database tier to allow inbound traffic on port 1433 from the security group for the web tier", "Configure the security group for the database tier to allow inbound traffic on ports 443 and 1433 from the security group for the web tier", "Configure the security group for the web tier to allow outbound traffic on port 443 from 0.0.0.0/0"],
    correctAnswer: 1
  },
  
  {
    question: "A company’s web application is using multiple Amazon EC2 Linux instances and storing data on Amazon EBS volumes. The company is looking for a solution to increase the resiliency of the application in case of a failure. What should a solutions architect do to meet these requirements?",
    choices: ["Create an Application Load Balancer with Auto Scaling groups across multiple Availability Zones. Store data on Amazon EFS and mount a target on each instance","Create an Application Load Balancer with Auto Scaling groups across multiple Availability Zones. Mount an instance store on each EC2 instance","Create an Application Load Balancer with Auto Scaling groups across multiple Availability Zones. Store data using Amazon S3 One Zone-Infrequent Access (S3 One Zone-A)","Launch the application on EC2 instances in each Availability Zone. Attach EBS volumes to each EC2 instance"],
    correctAnswer: 0
  },
  
  
  
  {
    question: "An AWS workload in a VPC is running a legacy database on an Amazon EC2 instance. Data is stored on a 2000GB Amazon EBS (gp2) volume. At peak load times, logs show excessive wait time. What should be implemented to improve database performance using persistent storage?",
    choices: ["Change the EC2 instance type to one with burstable performance", "Migrate the data on the Amazon EBS volume to an SSD-backed volume", "Change the EC2 instance type to one with EC2 instance store volumes", "Migrate the data on the EBS volume to provisioned IOPS SSD (io1)"],
    correctAnswer: 3
  },
  
  {
    question: "A Solutions Architect must select the most appropriate database service for two use cases. A team of data scientists perform complex queries on a data warehouse that take several hours to complete. Another team of scientists need to run fast, repeat queries and update dashboards for customer support staff. Which solution delivers these requirements MOST cost-effectively?",
    choices: ["RedShift for the analytics use case and ElastiCache in front of RedShift for the customer support dashboard", "RedShift for both use cases", "RedShift for the analytics use case and RDS for the customer support dashboard","RDS for both use cases"],
    correctAnswer: 1
  },
  
  {
    question: "Some objects that are uploaded to Amazon S3 standard storage class are initially accessed frequently for a period of 30 days. Then, objects are infrequently accessed for up to 90 days. After that, the objects are no longer needed. How should lifecycle management be configured?",
    choices: ["Transition to STANDARD_IA after 30 days. After 90 days transition to GLACIER", "Transition to REDUCED_REDUNDANCY after 30 days. After 90 days expire the objects", "Transition to STANDARD_IA after 30 days. After 90 days transition to ONEZONE_IA", "Transition to ONEZONE_IA after 30 days. After 90 days expire the objects"],
    correctAnswer: 3
  },
  
  {
    question: "Some objects that are uploaded to Amazon S3 standard storage class are initially accessed frequently for a period of 30 days. Then, objects are infrequently accessed for up to 90 days. After that, the objects are no longer needed. How should lifecycle management be configured?",
    choices: ["Transition to STANDARD_IA after 30 days. After 90 days transition to GLACIER", "Transition to REDUCED_REDUNDANCY after 30 days. After 90 days expire the objects", "Transition to STANDARD_IA after 30 days. After 90 days transition to ONEZONE_IA", "Transition to ONEZONE_IA after 30 days. After 90 days expire the objects"],
    correctAnswer: 3
  },

  {question: "A DynamoDB database you manage is randomly experiencing heavy read requests that are causing latency. What is the simplest way to alleviate the performance issues?",
  choices: ["Create an ElastiCache cluster in front of DynamoDB", "Enable EC2 Auto Scaling for DynamoDB", "Enable DynamoDB DAX", "Create DynamoDB read replicas"], 
  correctAnswer: 2},



{
  question: "A company has divested a single business unit and needs to move the AWS account owned by the business unit to another AWS Organization. How can this be achieved?",
  choices: ["Create a new account in the destination AWS Organization and migrate resources", "Migrate the account using AWS CloudFormation", "Migrate the account using the AWS Organizations console", "Create a new account in the destination AWS Organization and share the original resources using AWS Resource Access Manager"], 
  correctAnswer: 2},


{
  question: "A High Performance Computing (HPC) application will be migrated to AWS. The application requires low network latency and high throughput between nodes and will be deployed in a single AZ. How should the application be deployed for best inter-node performance?",
  choices: ["Behind a Network Load Balancer (NLB)", "In a spread placement group", "In a cluster placement group", "In a partition placement group"], 
  correctAnswer: 2}




];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
})();




