var sections=document.querySelectorAll("section"),navLinks=document.querySelectorAll(".nav-link"),navLinkHome=document.querySelector(".nav-link-home");console.log(navLinks),window.onscroll=function(){sections.forEach(function(n){var o=window.scrollY,e=n.offsetTop-300,c=n.offsetHeight,t=(console.log(o),n.getAttribute("id"));e<=o&&o<e+c&&navLinks.forEach(function(n){n.classList.remove("active"),document.querySelector(".nav-link-".concat(t)).classList.add("active")}),o<100&&(navLinks.forEach(function(n){n.classList.remove("active")}),navLinkHome.classList.add("active"))})};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbHNweS1tYWluLmpzIl0sIm5hbWVzIjpbInNlY3Rpb25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmF2TGlua3MiLCJjb25zb2xlIiwib25zY3JvbGwiLCJ3aW5kb3ciLCJzZWN0aW9uIiwiZm9yRWFjaCIsInNjcm9sbFkiLCJvZmZzZXQiLCJoZWlnaHQiLCJ0b3AiLCJnZXRBdHRyaWJ1dGUiLCJsaW5rIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicXVlcnlTZWxlY3RvciIsImlkIiwiY29uY2F0IiwiYWRkIiwibmF2TGlua0hvbWUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFNBQVdDLFNBQVNDLGlCQUFpQixTQUFTLEVBQzlDQyxTQUFXRixTQUFTQyxpQkFBaUIsV0FBVyxFQURoREYsWUFBV0MsU0FBU0MsY0FBaUIsZ0JBQVUsRUFDbkRFLFFBQUlELElBQVFBLFFBQUdGLEVBRWZHLE9BQU9DLFNBQUtGLFdBRVpHLFNBQU9ELFFBQVcsU0FBQUUsR0FDakJQLElBQUFBLEVBQVNRLE9BQVFDLFFBQ2hCQyxFQUFVSixFQUFPRyxVQUFPLElBQ3hCRSxFQUFVSixFQUFHQSxhQUViSCxHQUFBQSxRQURJTyxJQUFNQyxDQUFHTCxFQUNOQSxFQUFRTSxhQUFDLElBQUEsR0FHVEgsR0FBUEUsR0FBaUJBLEVBQU9GLEVBQVNDLEdBQ2hDUixTQUFBQSxRQUFTSyxTQUFBQSxHQUNSTSxFQUFBQSxVQUFLQyxPQUFVQyxRQUFPLEVBQ3RCZixTQUFBQSxjQUFTZ0IsYUFBQUEsT0FBYUMsQ0FBQSxDQUFBQyxFQUFBQSxVQUFvQkosSUFBQUEsUUFBVUssQ0FDckQsQ0FBQyxFQUlEakIsRUFBQUEsTUFBQUEsU0FDS0ssUUFBQ08sU0FBQUEsR0FBTEQsRUFDQ0MsVUFBQUMsT0FBQSxRQUFBLENBQUYsQ0FBQyxFQUNESyxZQUNETixVQUFBSyxJQUFBLFFBQUEsRUFFRCxDQUFBLENBQUQiLCJmaWxlIjoic2Nyb2xsc3B5LW1haW4tbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIik7XHJcbmxldCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtcIik7XHJcbmxldCBuYXZMaW5rSG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWxpbmstaG9tZVwiKTtcclxuY29uc29sZS5sb2cobmF2TGlua3MpO1xyXG5cclxud2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG5cdHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuXHRcdGxldCB0b3AgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHRcdGxldCBvZmZzZXQgPSBzZWN0aW9uLm9mZnNldFRvcCAtIDMwMDtcclxuXHRcdGxldCBoZWlnaHQgPSBzZWN0aW9uLm9mZnNldEhlaWdodDtcclxuXHRcdGNvbnNvbGUubG9nKHRvcCk7XHJcblx0XHRsZXQgaWQgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG5cclxuXHRcdGlmICh0b3AgPj0gb2Zmc2V0ICYmIHRvcCA8IG9mZnNldCArIGhlaWdodCkge1xyXG5cdFx0XHRuYXZMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcblx0XHRcdFx0bGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uYXYtbGluay0ke2lkfWApLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0b3AgPCAxMDApIHtcclxuXHRcdFx0bmF2TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG5cdFx0XHRcdGxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdG5hdkxpbmtIb21lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcbiJdfQ==