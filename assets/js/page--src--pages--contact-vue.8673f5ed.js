(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{232:function(e,a,t){},239:function(e){e.exports=JSON.parse('{"contact-en":{"title":"Contact","contact-info":"For all pricing and booking inquiries, please fill out the form below. Please include as much relevant information as possible, for example, specifications, the location of the project, and timeframe for project completion.","name":"Name","first-name":"First name","last-name":"Last name","email":"Email address","subject":"Subject","message":"Message","submit":"SUBMIT"},"contact-de":{"title":"Kontakt","contact-info":"Für alle Preis- und Buchungsanfragen füllen Sie bitte das folgende Formular aus. Bitte geben Sie so viele relevante Informationen wie möglich an, z. B. Spezifikationen, den Standort des Projekts und den Zeitrahmen für den Abschluss des Projekts.","name":"Name","first-name":"Vorname","last-name":"Nachname","email":"E-Mail-Addresse","subject":"Betreff","message":"Nachricht","submit":"Senden"}}')},240:function(e,a,t){"use strict";var s=t(232);t.n(s).a},246:function(e,a,t){"use strict";t.r(a);var s=t(239),i={metaInfo:{title:"Christoph Münks - Contact"},data:function(){return{lang:s,activeLanguage:"de",langPath:"contact-de",firstNameValid:!1,lastNameValid:!1,emailValid:!1,subjectValid:!1,messageValid:!1}},computed:{isDisabled:function(){return this.nameValid&&this.emailValid&&this.subjectValid&&this.messageValid}},mounted:function(){document.body.style.overflow="initial";var e=new CustomEvent("routeChanged",{});dispatchEvent(e)},beforeDestroy:function(){window.removeEventListener("langChanged",this.setLanguage)},methods:{setLanguage:function(){null!==localStorage.getItem("language")&&(this.activeLanguage=localStorage.getItem("language")),this.langPath="contact-"+this.activeLanguage},firstNameChange:function(){this.$refs.firstName.classList.add("user-initiated"),this.firstNameValid=this.$refs.firstName.value.length},lastNameChange:function(){this.$refs.lastName.classList.add("user-initiated"),this.lastNameValid=this.$refs.lastName.value.length>1},emailChange:function(){this.$refs.emailAddress.classList.add("user-initiated"),this.emailValid=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.$refs.emailAddress.value)},subjectChange:function(){this.$refs.subject.classList.add("user-initiated"),this.subjectValid=this.$refs.subject.value.length>1},messageChange:function(){this.$refs.message.classList.add("user-initiated"),this.messageValid=this.$refs.message.value.length>1}}},n=(t(240),t(8)),l=Object(n.a)(i,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("Layout",[t("div",{staticClass:"page-content"},[t("div",{staticClass:"flex-container"},[t("div",{staticClass:"contactTextContainer"},[t("h1",{staticClass:"contactTitle"},[e._v(e._s(e.lang[e.langPath].title.toUpperCase()))]),t("p",{staticClass:"contactInfoParagraph"},[e._v(e._s(e.lang[e.langPath]["contact-info"]))])]),t("form",{staticClass:"contactForm",attrs:{autocomplete:"off",action:"https://formspree.io/xoqpqogy",method:"POST"}},[t("div",{staticClass:"nameFieldContainer"},[t("label",{attrs:{for:"firstName"}},[e._v(e._s(e.lang[e.langPath].name)+"  *")]),t("div",{staticClass:"nameInputs"},[t("input",{ref:"firstName",class:{"not-valid":!e.firstNameValid},attrs:{type:"text",id:"firstName",name:"First name",placeholder:e.lang[e.langPath]["first-name"]},on:{keyup:e.firstNameChange}}),t("input",{ref:"lastName",class:{"not-valid":!e.lastNameValid},attrs:{type:"text",id:"lastName",name:"Last name",placeholder:e.lang[e.langPath]["last-name"]},on:{keyup:e.lastNameChange}})])]),t("div",{staticClass:"emailFieldContainer"},[t("label",{attrs:{for:"emailAddress"}},[e._v(e._s(e.lang[e.langPath].email)+" *")]),t("input",{ref:"emailAddress",class:{"not-valid":!e.emailValid},attrs:{type:"text",id:"emailAddress",name:"Email address",placeholder:"example@email.com"},on:{keyup:e.emailChange}})]),t("div",{staticClass:"subjectContainer"},[t("label",{attrs:{for:"subject"}},[e._v(e._s(e.lang[e.langPath].subject)+" *")]),t("input",{ref:"subject",class:{"not-valid":!e.subjectValid},attrs:{type:"text",id:"subject",name:"Subject",placeholder:"Project"},on:{keyup:e.subjectChange}})]),t("div",{staticClass:"messageContainer"},[t("label",{attrs:{for:"message"}},[e._v(e._s(e.lang[e.langPath].message)+" *")]),t("textarea",{ref:"message",class:{"not-valid":!e.messageValid},attrs:{id:"message",name:"Message"},on:{keyup:e.messageChange}})]),t("input",{staticClass:"formSubmitButton",attrs:{disabled:!e.isDisabled,type:"submit"},domProps:{value:e.lang[e.langPath].submit.toUpperCase()}})])])])])}),[],!1,null,"31c9471b",null);a.default=l.exports}}]);