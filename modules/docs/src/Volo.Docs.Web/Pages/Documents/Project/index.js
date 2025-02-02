﻿(function ($) {

    $(function () {
        var initNavigationFilter = function (navigationContainerId) {

            var $navigation = $("#" + navigationContainerId);


            var getShownDocumentLinks = function () {
                return $navigation.find(".mCSB_container > li a:visible").not(".tree-toggle");
            };

            var gotoFilteredDocumentIfThereIsOnlyOne = function () {
                var $links = getShownDocumentLinks();
                if ($links.length === 1) {
                    var url = $links.first().attr("href");
                    if (url === "javascript:;") {
                        return;
                    }

                    window.location = url;
                }
            };

            var filterDocumentItems = function (filterText) {
                $navigation.find(".mCSB_container .opened").removeClass("opened");
                $navigation.find(".mCSB_container > li, .mCSB_container > li ul").hide();

                if (!filterText) {
                    $navigation.find(".mCSB_container > li").show();
                    $navigation.find(".mCSB_container .selected-tree > ul").show();
                    return;
                }

                var filteredItems = $navigation.find("li > a").filter(function () {
                    return $(this).text().toUpperCase().indexOf(filterText.toUpperCase()) > -1;
                });

                filteredItems.each(function () {

                    var $el = $(this);
                    $el.show();
                    var $parent = $el.parent();

                    var hasParent = true;
                    while (hasParent) {
                        if ($parent.attr("id") === navigationContainerId) {
                            break;
                        }

                        $parent.show();
                        $parent.find("> li > label").not(".last-link").addClass("opened");

                        $parent = $parent.parent();
                        hasParent = $parent.length > 0;
                    }
                });
            };

            $(".docs-page .docs-tree-list input[type='search']").keyup(function (e) {
                filterDocumentItems(e.target.value);

                if (e.key === "Enter") {
                    gotoFilteredDocumentIfThereIsOnlyOne();
                }
            });
        };

        var initAnchorTags = function (container) {
            anchors.options = {
                placement: 'left'
            };

            var anchorTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
            anchorTags.forEach(function (tag) {
                anchors.add(container + " " + tag);
            });
        };

        var initSocialShareLinks = function () {
            var pageHeader = $(".docs-body").find("h1, h2").first().text();

            var projectName = $('#ProjectName')[0].innerText;

            $('#TwitterShareLink').attr('href',
                'https://twitter.com/intent/tweet?text=' + encodeURI(pageHeader + " | " + projectName + " | " + window.location.href)
            );

            $('#LinkedinShareLink').attr('href',
                'https://www.linkedin.com/shareArticle?'
                + 'url=' + encodeURI(window.location.href) + '&'
                + 'mini=true&'
                + "summary=" + encodeURI(projectName) + '&'
                + "title=" + encodeURI(pageHeader) + '&'
                + "source=" + encodeURI($('#GoToMainWebSite').attr('href'))
            );

            $('#EmailShareLink').attr('href',
                'mailto:?'
                + 'body=' + encodeURI('I want you to look at ' + window.location.href) + '&'
                + "subject=" + encodeURI(pageHeader + ' | ' + projectName) + '&'
            );
        };

        var initSections = function () {
            var clearQueryString = function () {
                var uri = window.location.href.toString();

                if (uri.indexOf("?") > 0) {
                    uri = uri.substring(0, uri.indexOf("?"));
                }

                window.history.replaceState({}, document.title, uri);
            };

            var setQueryString = function () {
                clearQueryString();

                var uri = window.location.href.toString();

                var comboboxes = $(".doc-section-combobox");

                if (comboboxes.length < 1) {
                    return;
                }

                var new_uri = uri + "?";

                for (var i = 0; i < comboboxes.length; i++) {
                    var key = $(comboboxes[i]).data('key');
                    var value = comboboxes[i].value;

                    new_uri += key + "=" + value;

                    if (i !== comboboxes.length - 1) {
                        new_uri += "&";
                    }
                }

                window.history.replaceState({}, document.title, new_uri);
            };

            var setCookies = function () {
                var cookie = abp.utils.getCookieValue("AbpDocsPreferences");

                if (!cookie || cookie == null || cookie === null) {
                    cookie = "";
                }
                var keyValues = cookie.split("|");

                var comboboxes = $(".doc-section-combobox");

                for (var i = 0; i < comboboxes.length; i++) {
                    var key = $(comboboxes[i]).data('key');
                    var value = comboboxes[i].value;

                    var changed = false;
                    var keyValueslength = keyValues.length;
                    for (var k = 0; k < keyValueslength; k++) {
                        var splitted = keyValues[k].split("=");

                        if (splitted.length > 0 && splitted[0] === key) {
                            keyValues[k] = key + "=" + value;
                            console.log(keyValues[k]);
                            changed = true;
                        }
                    }

                    if (!changed) {
                        keyValues.push(key + "=" + value);
                    }
                }

                abp.utils.setCookieValue("AbpDocsPreferences", keyValues.join('|'));
            };

            $(".doc-section-combobox").change(function () {
                setCookies();
                clearQueryString();
                location.reload();
            });

            setQueryString();
        };


        initNavigationFilter("sidebar-scroll");

        initAnchorTags(".docs-page .docs-body");

        initSocialShareLinks();

        initSections();

    });

})(jQuery);

