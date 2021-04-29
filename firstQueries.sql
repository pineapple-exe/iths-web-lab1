		create table course (
			id int identity not null,
			course_number int not null,
			popular bit not null,
			[current] bit not null,
			title nvarchar(52) not null,
			[description] nvarchar(900) not null,
			[type] nvarchar(17) not null,
			[start] DateTime not null,
			[length] int not null,
			constraint pk_course primary key (id)
		);

		insert into course
		values (1001, 0, 0, 'Introduktion till JavaScript', 'En beskrivning kommer att komma h�r', 'Gruppundervisning', '2021-04-29', 20);

		insert into course
		values (1002, 1, 0, 'Introduktion till C#', 'En beskrivning kommer att komma h�r', 'Distans', '2021-
--        "courseNumber": 1002,
--        "popular": true,
--        "current": false,
--        "title": "Introduktion till C#",
--        "description": "En beskrivning kommer att komma h�r",
--        "type": "Distans",
--        "start": "[StartDatum]",
--        "length": 40
--    },

--        "courseNumber": 1003,
--        "popular": true,
--        "current": false,
--        "title": "Introduktion till HTML",
--        "description": "En beskrivning kommer att komma h�r",
--        "type": "Distans",
--        "start": "[StartDatum]",
--        "length": 40
--    },

--        "courseNumber": 1004,
--        "popular": false,
--        "current": true,
--        "title": "Introduktion till CSS",
--        "description": "En beskrivning kommer att komma h�r",
--        "type": "Gruppundervisning",
--        "start": "[StartDatum]",
--        "length": 40
--    },

--        "courseNumber": 1005,
--        "popular": false,
--        "current": false,
--        "title": "Avancerad CSS",
--        "description": "En beskrivning kommer att komma h�r",
--        "type": "On-Demand",
--        "start": "[StartDatum]",
--        "length": 40
--    },

--        "courseNumber": 1006,
--        "popular": false,
--        "current": true,
--        "title": "Informationsbehandling med SQL",
--        "description": "En beskrivning kommer att komma h�r",
--        "type": "Distans",
--        "start": "[StartDatum]",

--        "courseNumber": 1007,
--        "popular": true,
--        "current": true,
--        "title": "Effektiva test inom IT",
--        "description": "En beskrivning kommer att komma h�r",
--        "type": "Gruppundervisning",
--        "start": "[StartDatum]",
--        "length": 20
--    },

--        "courseNumber": 1008,
--        "popular": true,
--        "current": false,
--        "title": "IT-s�kerhet",
--        "description": "En beskrivning kommer att komma h�r",
--        "type": "On-Demand",
--        "start": "[StartDatum]",
--        "length": 20