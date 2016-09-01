//包装函数
module.exports = function(grunt){
	//任务配置，所有插件的配置信息
	grunt.initConfig({

		//获取package.json的信息
		pkg:grunt.file.readJSON('package.json'),

		//uglify插件的配置信息
		uglify:{
			option:{
				stripBanner:true,
				banner:'/*! <%= pkg.name%>-<%= pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build:{
				src:'src/zepto.js',
				dest: 'dest/ <%= pkg.name%>-<%= pkg.version%>.min.js'
			}
		},

		jshint:{
			build:['Gruntfile.js','src/*.js'],  //要检查哪些js文档的语法
			options:{
				jshintrc:'.jshintrc'   //通过怎样的规则检查语法
			}
		},
		
		watch:{
			build:{
				files:['src/*.js','src/*.css','src/*.less'],
				tasks:['less'],
				options:{spawn:false}
			}
		}
	});
	//告诉grunt我们将使用的插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	


	//告诉grunt当我们在终端中输入grunt时需要做些什么（注意先后顺序）
	grunt.registerTask('default',['jshint','uglify','watch']);

};