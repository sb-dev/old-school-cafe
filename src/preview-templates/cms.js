import AboutPreview from './aboutPreview'
import CMS from "netlify-cms-app"
import EventsPreview from './eventsPreview'
import FindUsPreview from './findUsPreview'
import GalleryPreview from './galleryPreview'
import HeroPreview from './heroPreview'
import NavBarPreview from './navBarPreview'

CMS.registerPreviewTemplate("navbar", NavBarPreview)
CMS.registerPreviewTemplate("hero", HeroPreview)
CMS.registerPreviewTemplate("about", AboutPreview)
CMS.registerPreviewTemplate("find-us", FindUsPreview)
CMS.registerPreviewTemplate("events", EventsPreview)
CMS.registerPreviewTemplate("gallery", GalleryPreview)
