var questions = [
{
	question: "what is your favorite color?",
  answers: [
  	{
    	label: 'red',
      value: 'red'
    },
    {
    	label: 'green',
      value: 'green'
    },
    {
    	label: 'yellow',
      value: 'yellow'
    },
    {
    	label: 'blue',
      value: 'blue'
    },
    {
    	label: 'purple',
      value: 'purple'
    }
  ]
},
{
	question: "what is your gender?",
  answers: [
  	{
    	label: 'male',
      value: 'male'
    },
    {
    	label: 'female',
      value: 'female'
    }
  ]
},
{
	question: "what is your favorite color?",
  answers: [
  	{
    	label: 'red',
      value: 'red'
    },
    {
    	label: 'green',
      value: 'green'
    },
    {
    	label: 'yellow',
      value: 'yellow'
    },
    {
    	label: 'blue',
      value: 'blue'
    },
    {
    	label: 'purple',
      value: 'purple'
    }
  ]
},
{
	question: "what is your favorite color?",
  answers: [
  	{
    	label: 'red',
      value: 'red'
    },
    {
    	label: 'green',
      value: 'green'
    },
    {
    	label: 'yellow',
      value: 'yellow'
    },
    {
    	label: 'blue',
      value: 'blue'
    },
    {
    	label: 'purple',
      value: 'purple'
    }
  ]
},
{
	question: "what is your favorite color?",
  answers: [
  	{
    	label: 'red',
      value: 'red'
    },
    {
    	label: 'green',
      value: 'green'
    },
    {
    	label: 'yellow',
      value: 'yellow'
    },
    {
    	label: 'blue',
      value: 'blue'
    },
    {
    	label: 'purple',
      value: 'purple'
    }
  ]
},
{
	question: "what is your favorite color?",
  answers: [
  	{
    	label: 'red',
      value: 'red'
    },
    {
    	label: 'green',
      value: 'green'
    },
    {
    	label: 'yellow',
      value: 'yellow'
    },
    {
    	label: 'blue',
      value: 'blue'
    },
    {
    	label: 'purple',
      value: 'purple'
    }
  ]
},
{
	question: "what is your favorite color?",
  answers: [
  	{
    	label: 'red',
      value: 'red'
    },
    {
    	label: 'green',
      value: 'green'
    },
    {
    	label: 'yellow',
      value: 'yellow'
    },
    {
    	label: 'blue',
      value: 'blue'
    },
    {
    	label: 'purple',
      value: 'purple'
    }
  ]
}
];

function create_select(){
	var select = $("<select>");
  return select;
}

function create_option(answer){
	var option = $("<option>" + answer.label + "</option>");
  option.attr('value', answer.value);
  return option;
}

function create_label(question){
	return $("<label>" + question + "</label>");
}

function main(){
	questions.forEach(function(question){
  	var select = create_select();
    question.answers.forEach(function(answer){
    	var option = create_option(answer);
      select.append(option);
    });
    var label = create_label(question.question);
    $("#main_form").append(label).append(select);
  });
}

main();






