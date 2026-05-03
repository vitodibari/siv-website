import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export function initPhotoSwipe() {
    const lightbox = new PhotoSwipeLightbox({
        gallery: "#gallery",
        children: "a",
        pswpModule: () => import("photoswipe"),
    });

    lightbox.on("uiRegister", function () {
        lightbox!.pswp!.ui!.registerElement({
            name: "download-button",
            order: 8,
            isButton: true,
            tagName: "a",
            html: {
                isCustomSVG: true,
                inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
                outlineID: "pswp__icn-download",
            },
            onInit: (el, pswp) => {
                const a = el as HTMLAnchorElement;
                a.setAttribute("download", "");
                a.setAttribute("target", "_blank");
                a.setAttribute("rel", "noopener");
                pswp.on("change", () => {
                    if (pswp.currSlide?.data.src) {
                        a.href = pswp.currSlide.data.src;
                    }
                });
            },
        });
    });

    lightbox.init();
}
