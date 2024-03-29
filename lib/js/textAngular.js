if (!window.console)
	console = {
		log: function () {}
	};
var textAngular = angular.module("textAngular", ["ngSanitize"]);
textAngular.directive("textAngular", ["$compile", "$window", "$document", "$rootScope", "$timeout", "taFixChrome", function (t, e, n, a, l, i) {
			//console.log("Thank you for using textAngular! http://www.textangular.com");
			function o(t, e) {
				for (var n in e) {
					if (e[n] && e[n].constructor && e[n].constructor === Object) {
						t[n] = t[n] || {};
						arguments.callee(t[n], e[n])
					} else {
						t[n] = e[n]
					}
				}
				return t
			}
			a.textAngularOpts = o({
					toolbar: [["h1", "h2", "h3", "p", "pre", "quote"], ["bold", "italics", "underline", "ul", "ol", "redo", "undo", "clear"], ["justifyLeft", "justifyCenter", "justifyRight"], ["html", "insertImage", "insertLink", "unlink"]],
					classes: {
						focussed: "focussed-ta",
						toolbar: "btn-toolbar-ta",
						toolbarGroup: "btn-group-ta",
						toolbarButton: "btn-ta btn-default-ta",
						toolbarButtonActive: "active",
						textEditor: "form-control-ta",
						htmlEditor: "form-control-ta"
					}
				}, a.textAngularOpts != null ? a.textAngularOpts : {});
			var s = function (t) {
				t = t.toLowerCase();
				var e = n[0].queryCommandValue("formatBlock").toLowerCase();
				return e === t || e === t
			};
			a.textAngularTools = o({
					html: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'>Toggle HTML</button>",
						action: function () {
							var t,
							e = this;
							this.$parent.showHtml = !this.$parent.showHtml;
							if (this.$parent.showHtml) {
								l(function () {
									return e.$parent.displayElements.html[0].focus()
								}, 100)
							} else {
								l(function () {
									return e.$parent.displayElements.text[0].focus()
								}, 100)
							}
							this.active = this.$parent.showHtml
						}
					},
					h1: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'>H1</button>",
						action: function () {
							return this.$parent.wrapSelection("formatBlock", "<H1>")
						},
						activeState: function () {
							return s("h1")
						}
					},
					h2: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'>H2</button>",
						action: function () {
							return this.$parent.wrapSelection("formatBlock", "<H2>")
						},
						activeState: function () {
							return s("h2")
						}
					},
					h3: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'>H3</button>",
						action: function () {
							return this.$parent.wrapSelection("formatBlock", "<H3>")
						},
						activeState: function () {
							return s("h3")
						}
					},
					p: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'>P</button>",
						action: function () {
							return this.$parent.wrapSelection("formatBlock", "<P>")
						},
						activeState: function () {
							return s("p")
						}
					},
					pre: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-code'></i></button>",
						action: function () {
							return this.$parent.wrapSelection("formatBlock", "<PRE>")
						},
						activeState: function () {
							return s("pre")
						}
					},
					ul: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-list-ul'></i></button>",
						action: function () {
							return this.$parent.wrapSelection("insertUnorderedList", null)
						},
						activeState: function () {
							return n[0].queryCommandState("insertUnorderedList")
						}
					},
					ol: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-list-ol'></i></button>",
						action: function () {
							return this.$parent.wrapSelection("insertOrderedList", null)
						},
						activeState: function () {
							return n[0].queryCommandState("insertOrderedList")
						}
					},
					quote: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-quote-right'></i></button>",
						action: function () {
							return this.$parent.wrapSelection("formatBlock", "<BLOCKQUOTE>")
						},
						activeState: function () {
							return s("blockquote")
						}
					},
					undo: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-undo'></i></button>",
						action: function () {
							return this.$parent.wrapSelection("undo", null)
						}
					},
					redo: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-repeat'></i></button>",
						action: function () {
							return this.$parent.wrapSelection("redo", null)
						}
					},
					bold: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-bold'></i></button>",
						action: function () {
							return this.$parent.wrapSelection("bold", null)
						},
						activeState: function () {
							return n[0].queryCommandState("bold")
						}
					},
					justifyLeft: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-align-left'></i></button>",
						action: function () {
							return this.$parent.wrapSelection("justifyLeft", null)
						},
						activeState: function () {
							return n[0].queryCommandState("justifyLeft")
						}
					},
					justifyRight: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-align-right'></i></button>",
						action: function () {
							return this.$parent.wrapSelection("justifyRight", null)
						},
						activeState: function () {
							return n[0].queryCommandState("justifyRight")
						}
					},
					justifyCenter: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-align-center'></i></button>",
						action: function () {
							return this.$parent.wrapSelection("justifyCenter", null)
						},
						activeState: function () {
							return n[0].queryCommandState("justifyCenter")
						}
					},
					italics: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-italic'></i></button>",
						action: function () {
							return this.$parent.wrapSelection("italic", null)
						},
						activeState: function () {
							return n[0].queryCommandState("italic")
						}
					},
					underline: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-underline'></i></button>",
						action: function () {
							return this.$parent.wrapSelection("underline", null)
						},
						activeState: function () {
							return n[0].queryCommandState("underline")
						}
					},
					clear: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-ban'></i></button>",
						action: function () {
							return this.$parent.wrapSelection("removeFormat", null)
						}
					},
					insertImage: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-picture-o'></i></button>",
						action: function () {
							var t;
							t = prompt("Please enter an image URL to insert", "http://");
							if (t !== "") {
								return this.$parent.wrapSelection("insertImage", t)
							}
						}
					},
					insertLink: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-link'></i></button>",
						action: function () {
							var t;
							t = prompt("Please enter an URL to insert", "http://");
							if (t !== "") {
								return this.$parent.wrapSelection("createLink", t)
							}
						}
					},
					unlink: {
						display: "<button type='button-ta' ng-click='action()' ng-class='displayActiveToolClass(active)'><i class='fa fa-unlink'></i></button>",
						action: function () {
							return this.$parent.wrapSelection("unlink", null)
						}
					}
				}, a.textAngularTools != null ? a.textAngularTools : {});
			return {
				require: "ngModel",
				scope: {},
				restrict: "EA",
				link: function (e, o, s, r) {
					var c,
					u,
					p,
					d,
					f,
					m;
					angular.extend(e, a.textAngularOpts, {
						wrapSelection: function (t, n) {
							document.execCommand(t, false, n);
							if (t === "insertUnorderedList" || t === "insertOrderedList")
								i(e.displayElements.text);
							if (e.showHtml)
								e.displayElements.html[0].focus();
							else
								e.displayElements.text[0].focus();
							e.updateSelectedStyles();
							if (!e.showHtml)
								e.updateTaBindtext()
						},
						showHtml: false
					});
					if (!!s.taToolbar)
						e.toolbar = e.$eval(s.taToolbar);
					if (!!s.taFocussedClass)
						e.classes.focussed = e.$eval(s.taFocussedClass);
					if (!!s.taToolbarClass)
						e.classes.toolbar = s.taToolbarClass;
					if (!!s.taToolbarGroupClass)
						e.classes.toolbarGroup = s.taToolbarGroupClass;
					if (!!s.taToolbarButtonClass)
						e.classes.toolbarButton = s.taToolbarButtonClass;
					if (!!s.taToolbarActiveButtonClass)
						e.classes.toolbarButtonActive = s.taToolbarActiveButtonClass;
					if (!!s.taTextEditorClass)
						e.classes.textEditor = s.taTextEditorClass;
					if (!!s.taHtmlEditorClass)
						e.classes.htmlEditor = s.taHtmlEditorClass;
					e.displayElements = {
						toolbar: angular.element("<div></div>"),
						forminput: angular.element("<input type='hidden' style='display: none;'>"),
						html: angular.element("<textarea ng-show='showHtml' ta-bind='html' ng-model='html' ></textarea>"),
						text: angular.element("<div contentEditable='true' ng-hide='showHtml' ta-bind='text' ng-model='text' ></div>")
					};
					o.append(e.displayElements.toolbar);
					o.append(e.displayElements.text);
					o.append(e.displayElements.html);
					if (!!s.name) {
						e.displayElements.forminput.attr("name", s.name);
						o.append(e.displayElements.forminput)
					}
					t(e.displayElements.text)(e);
					t(e.displayElements.html)(e);
					o.addClass("ta-root");
					e.displayElements.toolbar.addClass("ta-toolbar " + e.classes.toolbar);
					e.displayElements.text.addClass("ta-text ta-editor " + e.classes.textEditor);
					e.displayElements.html.addClass("ta-html ta-editor " + e.classes.textEditor);
					o.on("focusin", function () {
						o.addClass(e.classes.focussed);
						l(function () {
							o.triggerHandler("focus")
						}, 0)
					});
					o.on("focusout", function () {
						l(function () {
							if (!(n[0].activeElement === e.displayElements.html[0]) && !(n[0].activeElement === e.displayElements.text[0])) {
								o.removeClass(e.classes.focussed);
								l(function () {
									o.triggerHandler("blur")
								}, 0)
							}
						}, 0)
					});
					e.tools = {};
					for (var y = 0; y < e.toolbar.length; y++) {
						c = e.toolbar[y];
						u = angular.element("<div></div>");
						u.addClass(e.classes.toolbarGroup);
						for (var g = 0; g < c.length; g++) {
							f = c[g];
							m = angular.element(a.textAngularTools[f].display);
							m.addClass(e.classes.toolbarButton);
							m.attr("unselectable", "on");
							m.attr("ng-disabled", "showHtml()");
							var v = angular.extend(e.$new(true), a.textAngularTools[f], {
									name: f,
									showHtml: function () {
										if (this.name !== "html")
											return this.$parent.showHtml;
										return false
									},
									displayActiveToolClass: function (t) {
										return t ? this.$parent.classes.toolbarButtonActive : ""
									}
								});
							e.tools[f] = v;
							u.append(t(m)(v))
						}
						e.displayElements.toolbar.append(u)
					}
					r.$render = function () {
						e.displayElements.forminput.val(r.$viewValue);
						if (r.$viewValue === undefined)
							return;
						if (!(n[0].activeElement === e.displayElements.html[0]) && !(n[0].activeElement === e.displayElements.text[0])) {
							var t = r.$viewValue || "";
							e.text = t;
							e.html = t
						}
					};
					e.$watch("text", function (t, n) {
						e.html = t;
						r.$setViewValue(t);
						e.displayElements.forminput.val(t)
					});
					e.$watch("html", function (t, n) {
						e.text = t;
						r.$setViewValue(t);
						e.displayElements.forminput.val(t)
					});
					e.bUpdateSelectedStyles = false;
					e.updateSelectedStyles = function () {
						for (var t = 0; t < e.toolbar.length; t++) {
							var n = e.toolbar[t];
							for (var a = 0; a < n.length; a++) {
								f = n[a];
								if (e.tools[f].activeState != null) {
									e.tools[f].active = e.tools[f].activeState.apply(e)
								}
							}
						}
						if (this.bUpdateSelectedStyles)
							l(this.updateSelectedStyles, 200)
					};
					p = function (t) {
						e.bUpdateSelectedStyles = true;
						e.$apply(function () {
							e.updateSelectedStyles()
						})
					};
					e.displayElements.html.on("keydown", p);
					e.displayElements.text.on("keydown", p);
					d = function (t) {
						e.bUpdateSelectedStyles = false
					};
					e.displayElements.html.on("keyup", d);
					e.displayElements.text.on("keyup", d);
					mouseup = function (t) {
						e.$apply(function () {
							e.updateSelectedStyles()
						})
					};
					e.displayElements.html.on("mouseup", mouseup);
					e.displayElements.text.on("mouseup", mouseup)
				}
			}
		}
	]).directive("taBind", ["$sanitize", "$document", "taFixChrome", function (t, e, n) {
			return {
				require: "ngModel",
				scope: {
					taBind: "@"
				},
				link: function (a, l, i, o) {
					var s = l[0].tagName.toLowerCase() !== "textarea" && l[0].tagName.toLowerCase() !== "input" && l.attr("contenteditable") !== undefined;
					var r = function () {
						var t = n(angular.element("<div>").append(l.html())).html();
						if (a.taBind === "html" && s)
							t = t.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
						return t
					};
					a.$parent["updateTaBind" + a.taBind] = function () {
						var t = r();
						var e = o.$parsers;
						o.$parsers = [];
						o.$oldViewValue = t;
						o.$setViewValue(t);
						o.$parsers = e
					};
					if (s) {
						l.on("keyup", function (t) {
							o.$setViewValue(r())
						})
					}
					o.$parsers.push(function (e) {
						if (o.$oldViewValue === undefined)
							o.$oldViewValue = e;
						try {
							t(e)
						} catch (n) {
							return o.$oldViewValue
						}
						o.$oldViewValue = e;
						return e
					});
					o.$render = function () {
						if (o.$viewValue === undefined)
							return;
						if (e[0].activeElement !== l[0]) {
							var t = o.$viewValue || "";
							o.$oldViewValue = t;
							if (a.taBind === "text") {
								l.html(t);
								l.find("a").on("click", function (t) {
									t.preventDefault();
									return false
								})
							} else if (s || l[0].tagName.toLowerCase() !== "textarea" && l[0].tagName.toLowerCase() !== "input")
								l.html(t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"));
							else
								l.val(t)
						} else if (!s)
							l.val(t)
					}
				}
			}
		}
	]).factory("taFixChrome", function () {
	var t = function (t) {
		var e = angular.element(t).find("span");
		for (var n = 0; n < e.length; n++) {
			var a = angular.element(e[n]);
			if (a.attr("style") && a.attr("style").match(/line-height: 1.428571429;|color: inherit; line-height: 1.1;/i)) {
				if (a.next().length > 0 && a.next()[0].tagName === "BR")
					a.next().remove();
				a.replaceWith(a.html())
			}
		}
		var l = t.html().replace(/style="[^"]*?(line-height: 1.428571429;|color: inherit; line-height: 1.1;)[^"]*"/gi, "");
		t.html(l);
		return t
	};
	return t
});
