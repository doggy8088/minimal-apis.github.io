(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{382:function(t,e,a){"use strict";a.r(e);var s=a(27),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#databases"}},[t._v("#")]),t._v(" Databases")]),t._v(" "),a("h2",{attrs:{id:"working-with-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-databases"}},[t._v("#")]),t._v(" Working with Databases")]),t._v(" "),a("p",[t._v("We just learned how to build a basic "),a("RouterLink",{attrs:{to:"/tutorial/CRUD.html"}},[t._v("CRUD")]),t._v(" application with an in-memory database. Now, we are going to step it up notch and work with a persistent database. Meaning your data will be saved even after you shut down your application.")],1),t._v(" "),a("p",[t._v("For this tutorial we will be using "),a("a",{attrs:{href:"https://www.sqlite.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQLite database"),a("OutboundLink")],1),t._v(" but, you may use on that works better for you.")]),t._v(" "),a("h3",{attrs:{id:"learn-checklist-three-✔️"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learn-checklist-three-✔️"}},[t._v("#")]),t._v(" Learn checklist Three ✔️")]),t._v(" "),a("ul",[a("li",[t._v("Setup SQLite database")]),t._v(" "),a("li",[t._v("Create a SQLite database")]),t._v(" "),a("li",[t._v("Perform SQLite CRUD operation from our todo api")])]),t._v(" "),a("h2",{attrs:{id:"setup-sqlite-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-sqlite-database"}},[t._v("#")]),t._v(" Setup SQLite database")]),t._v(" "),a("p",[a("strong",[t._v("Setup SQLite Database using Entity Framework Core(EF Core)")]),t._v("*")]),t._v(" "),a("p",[a("strong",[t._v("Install the following tools and packages")])]),t._v(" "),a("p",[t._v("Using .NET CLI / Visual Studio package manager UI, install the following packages:")]),t._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.Sqlite/6.0.0-preview.5.21301.9",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQLite EF Core Database Provider"),a("OutboundLink")],1)]),t._v(" : can access many different databases through plug-in libraries called "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/ef/core/providers/?tabs=dotnet-core-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("database providers"),a("OutboundLink")],1),t._v(". The package below is the SQLite database provider for EF Core.")]),t._v(" "),a("div",{staticClass:"language-console line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("TodoApi>dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 6.0.0-preview.6.21352.1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/ef/core/cli/dotnet",target:"_blank",rel:"noopener noreferrer"}},[t._v("Entity Framework Core tools "),a("OutboundLink")],1)]),t._v(": tools for Entity Framework Core perform design-time development tasks. For example, they create migrations, apply migrations, and generate code for a model based on an existing database.")]),t._v(" "),a("div",{staticClass:"language-console line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("TodoApi>dotnet tool install --global dotnet-ef\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[a("a",{attrs:{href:"https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.Design/6.0.0-preview.5.21301.9",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Microsoft.EntityFrameworkCore.Design")]),a("OutboundLink")],1)]),t._v(" : contains all the design-time logic for EF core to create your database.")]),t._v(" "),a("div",{staticClass:"language-console line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("TodoApi>dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.0-preview.6.21352.1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"enable-database-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-database-creation"}},[t._v("#")]),t._v(" Enable database creation")]),t._v(" "),a("p",[t._v("In order to enable database creation they are couple of steps we need to complete:")]),t._v(" "),a("ol",[a("li",[t._v("Set the database connection string.")]),t._v(" "),a("li",[t._v("Migrate your data model "),a("em",[t._v("(see below)")]),t._v(" to a SQLite database.\n"),a("strong",[t._v("Create a data model")])])]),t._v(" "),a("div",{staticClass:"language-cs line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TodoItem")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" Id "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")])]),t._v(" Item "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")])]),t._v(" IsComplete "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Create your database and schema")])]),t._v(" "),a("h2",{attrs:{id:"set-connection-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-connection-string"}},[t._v("#")]),t._v(" Set connection string")]),t._v(" "),a("p",[t._v("In "),a("code",[t._v("Program.cs")]),t._v(" below your app builder "),a("code",[t._v("var builder = WebApplication.CreateBuilder(args);")]),t._v(" add a connection string.")]),t._v(" "),a("div",{staticClass:"language-cs line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" connectionString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConnectionString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"todos"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Data Source=todos.db"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"add-your-context-to-your-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-your-context-to-your-services"}},[t._v("#")]),t._v(" Add your context to your services")]),t._v(" "),a("p",[t._v("In the CRUD portion of this tutorial, we used an in-memory database. Now we are going to replace the in-memory database with a persistent database.")]),t._v(" "),a("p",[t._v("Replace your current in-memory database implementation "),a("code",[t._v('builder.Services.AddDbContext<TodoDb>(options => options.UseInMemoryDatabase("items"));')]),t._v(" in your build services with the SQLite one below:")]),t._v(" "),a("div",{staticClass:"language-cs line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[t._v("builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddSqlite")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TodoDb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connectionString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"migrate-data-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-data-model"}},[t._v("#")]),t._v(" Migrate data model")]),t._v(" "),a("p",[t._v("With EF Core migration tool, you can now start your first migration "),a("code",[t._v("InitialCreate")]),t._v(".  In a terminal window, run the "),a("code",[t._v("migrations")]),t._v(" command below:")]),t._v(" "),a("div",{staticClass:"language-console line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("TodoApi> dotnet ef migrations add InitialCreate\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("EF Core will create a folder called Migrations in your project directory containing two files "),a("em",[t._v("(see image below)")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/2546640/128618497-8de76c16-cd38-48a8-9704-599c15d115f0.png",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"create-your-database-and-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-your-database-and-schema"}},[t._v("#")]),t._v(" Create your database and schema")]),t._v(" "),a("p",[t._v("Now that you have completed the migration, you can use it to create your database and schema. In a terminal window, run the "),a("code",[t._v("database update")]),t._v(" command below to apply migrations to a database:")]),t._v(" "),a("div",{staticClass:"language-console line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("TodoApi> dotnet ef database update\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("You should see a newly created "),a("code",[t._v("todos.db")]),t._v(" file in your project directory "),a("em",[t._v("(see image below)")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/2546640/128619644-e35bce93-0a87-4367-8790-0d09e837ba97.png",alt:"image"}})]),t._v(" "),a("p",[t._v("Your persistent database is set up! Happy coding  😺")])])}),[],!1,null,null,null);e.default=r.exports}}]);