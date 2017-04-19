/*
This is empty on purpose! Your code to build the resume will go here.

 */

 // an object bio which stores my bio-data
 var bio = {
 	"name" : "Shreyas Sachan",
 	"role" : "Web Developer",
 	"contacts" :{ "Mobile" : "8750608905",
 		"Gmail" : "shreyas.sachan@gmail.com",
 		"location" : "Delhi"
 	},
 	"img" : "/images/fry.jpg",
 	"msg" : "Welcome to My Resume",
 	"skills" : ["C++","Java","Android","Html"],

 	"displaySkills" : function() {
		//Writing Skills to the resume
		if(bio.skills.length > 0) {
 		var i = 0;
 		while(i < bio.skills.length) {
 		var formattSkill = HTMLskills.replace("%data%",bio.skills[i]);
 		$("#header").append(formattSkill); 
 		i=i+1;
 		}
	  }
	},

	"displayBio" : function() {
		//writing the bio-data to the resume
		
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
 		
 		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

 		var formatterContact1 = HTMLcontactGeneric.replace("%data%",bio.contacts.Mobile);
 		var newformatterContact1 = formatterContact1.replace("%contact%","mobile")
 
 		var formatterContact2 = HTMLcontactGeneric.replace("%data%",bio.contacts.Gmail);
 		var newformatterContact2 = formatterContact2.replace("%contact%","email")

 		var formatterContact3 = HTMLcontactGeneric.replace("%data%",bio.contacts.Github);
 		var newformatterContact3 = formatterContact3.replace("%contact%","github")

 		var formatterContact4 = HTMLcontactGeneric.replace("%data%",bio.contacts.location);
 		var newformatterContact4 = formatterContact4.replace("%contact%","location")

 		var formattedImg = HTMLbioPic.replace("%data",bio.img);
 		
 		var formattedMsg = HTMLwelcomeMsg.replace("%data",bio.msg);

 		$("#header").append(formattedName);
 		$("#header").append(formattedRole);
 		$("#header").append(newformatterContact1);
 		$("#header").append(newformatterContact2);
 		$("#header").append(newformatterContact3);
 		$("#header").append(newformatterContact4);
 		$("#header").append(HTMLskillsStart);

 		//writing the skills to the resume
 		bio.displaySkills();
	}

};

// an object storing the details of my education
var education = { 
	"schools" : [ {
		"name" : "Cluster Innovation Center, University of Delhi",
		"location" : "G C Narang Road, North Campus, University of Delhi",
		"degree" : "Bachelors of Technology",
		"dates" : "2016-2020",
		"majors" : ["Information Technology","Mathematics"]
	} ],
	"onlineCourses" : [{
		"title" : "Android Basics Course",
		"school" : "Udacity",
		"dates" : "Dec 2016-Feb 2017",
		"url" : "https://www.udacity.com/"
	},
	{
		"title" : "JavaScript Basics Course",
		"school" : "Udacity",
		"dates" : "Feb 2017-Feb 2017",
		"url" : "https://www.udacity.com/"	
	}],
	"display" : function() {
		for(i=0;i<education.schools.length;i++) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[i].name));
			$(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[i].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[i].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[i].location));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[i].majors));
		}
		$("#education").append(HTMLonlineClasses);
		for(i=0;i<education.onlineCourses.length;i++) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title));
			$(".education-entry:last").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[i].url));
			var a = document.getElementById("url")
			a.href = education.onlineCourses[i].url;
			var b = document.getElementById("url")
			b.id = "url"+i;
		}
	
	}
	}

// object storing the details related to my projects 
var Projects = {
	"projects" : [{
	"title" : "LFR",
	"dates" : "July 2016 - September 2016",
	"description" : "This project is based on making robots which follow a colored line. These projects can also be used to solve real life problems.",
	"img" : "images/LFR.jpg"
}],
	"display" : function() {
		for(i=0;i<Projects.projects.length;i++) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",Projects.projects[i].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%",Projects.projects[i].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",Projects.projects[i].description));
			//$(".project-entry:last").append(HTMLprojectImage.replace("%data%",Projects.projects[i].img));
		}
	}
}

/* object storing the information regarding my work i.e, the places
   where i have worked and where iam currently working
   */
var work = {
	"job" : [ {"employer" : "FaceBook",
				"title" : "",
				"location" : "California",
				"dates" : "in progress",
				"description" : ""},
			{"employer" : "Google",
	 		  "title" : "software Engineer",
	 		   "location" : "Hyderabad",
	 		    "dates" : "Jan 2015 - Dec 2016 ",
	 		"description" : "Creating new apps and improving the existing google play store. Also innovating some new softwares which  help the human society"}],
	
	"display" : function() {
 		for(item in work.job) {
 			var jobObject = work.job[item];
 			$("#workExperience").append(HTMLworkStart);  
 			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",jobObject.employer));
 			$(".work-entry:last").append(HTMLworkTitle.replace("%data%",jobObject.title));
 			$(".work-entry:last").append(HTMLworkDates.replace("%data%",jobObject.dates));
 			$(".work-entry:last").append(HTMLworkLocation.replace("%data%",jobObject.location));
 			$(".work-entry:last").append(HTMLworkDescription.replace("%data%",jobObject.description));
 		}
	} 		
}
 

 
var inName = function(name) {
	name = name.trim().split(" "); 
	console.log(name);
	name = name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase() + " " + name[1].toUpperCase(); 
	return name;
}

 work.display();
 bio.displayBio();
 Projects.display();
 education.display();
 $("#mapDiv").append(googleMap);

 