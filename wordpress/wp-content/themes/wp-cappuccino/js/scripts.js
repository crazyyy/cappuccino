function WorksNumber(){window.visibleNumber=1,$(".works-example").each(function(e,a){"none"!=$(this).css("display")?($(this).attr("data-number",window.visibleNumber),window.visibleNumber++):$(this).attr("data-number","0")})}function ModalImagesGenerate(e){var a=$(e).find(".thumb").attr("data-big-image"),t=$(e).find(".gallery-special-images").html(),l=$(e).attr("data-number"),n=$(e).find(".price").children("p").children("span").html();$(".modal-gallery-container .gallery-full img").attr("src",a),$(".gallery-thumbs").each(function(e,a){$(this).html(t)}),$(".modal-gallery-container").attr("data-current",l),$(".text-and-meta .meta p span").html(n),1==l?$("#galley_item_details .prev").hide():$("#galley_item_details .prev").show(),l==window.visibleNumber-1?$("#galley_item_details .next").hide():$("#galley_item_details .next").show()}function OpenModal(){$(".reveal-modal-bg").fadeIn("fast"),$("#galley_item_details").addClass("open")}function CloseModal(e){e.preventDefault,$(".reveal-modal-bg").fadeOut("fast"),$("#galley_item_details").removeClass("open")}WorksNumber(),$(".filter-row button").click(function(){window.setTimeout(WorksNumber,1e3)}),$(".works-example").on("click",function(e){e.preventDefault;var a=e.currentTarget;ModalImagesGenerate(a),OpenModal(event)}),$("#galley_item_details .ajax-prevnext").on("click",function(e){e.preventDefault;var a=e.currentTarget,t=$(".modal-gallery-container").attr("data-current");if($(a).hasClass("next"))var l=parseInt(t)+1;else if($(a).hasClass("prev"))var l=parseInt(t)-1;var n='[data-number="'+l+'"]',r=$(n);CloseModal(event),ModalImagesGenerate(r),OpenModal(event)}),$(".close-reveal-modal").on("click",function(e){CloseModal(e)}),$(".text-and-meta").on("click",function(e){CloseModal(e)});
//# sourceMappingURL=maps/scripts.js.map