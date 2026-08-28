# Code review backlog

Revisión completa de `src/` (2026-08-22). Vamos arreglando un paso por día, en orden. Marca con `[x]` al terminar cada uno antes de pasar al siguiente.

## Paso 1 — Formulario de contacto no captura datos ✅

Migrado a `ReactiveFormsModule` — `contact.component.ts` arma un `FormGroup` (name/email/condo/service/message) y `onSubmit()` lee `this.form.value` en vez de ignorarlo. Tests agregados (ver Paso 6).

- [x] Hecho — `src/app/components/contact/contact.component.ts`, `contact.component.html`
- **Pendiente dentro de este paso**: sigue sin backend real — `onSubmit()` solo hace `console.log(payload)` + `setTimeout` simulado. Conectar a un servicio de email/API real queda como paso aparte cuando toque.

## Paso 2 — Sin validación en el formulario ✅

Se podía enviar vacío y ver "¡Mensaje enviado!" igual.

- [x] Hecho — `Validators.required` en todos los campos, `Validators.email` en email. `onSubmit()` bloquea el envío y marca los campos con `markAllAsTouched()` si el form es inválido. Errores bilingües (`form.error.required`/`form.error.email`) mostrados bajo cada campo, con `aria-invalid` y estilo de borde/rojo en `styles.css`. Archivos: `contact.component.ts`, `contact.component.html`, `i18n.service.ts`, `styles.css`.
- Tests agregados en `contact.component.spec.ts` (envío vacío bloqueado, email inválido rechazado). `ng test --watch=false --browsers=ChromeHeadless` (CHROME_BIN → Edge): **7/7 SUCCESS**. `ng build` sin errores.

## Paso 3 — Labels del formulario no asociados a sus inputs ✅

Falta `for`/`id`, rompe accesibilidad con lectores de pantalla.

- [x] Hecho — cada `<label>` tiene `for` apuntando al `id` de su input/select/textarea (`contact-name`, `contact-email`, `contact-condo`, `contact-service`, `contact-message`). Archivo: `contact.component.html`.
- `ng test --watch=false --browsers=ChromeHeadless`: **7/7 SUCCESS**. `ng build` sin errores.

## Paso 4 — Datos placeholder en el formulario de contacto

Teléfono `+1 (555) 123-4567` y dirección `123 Main Street, Suite 400` son ficticios.

- [ ] Pendiente — reemplazar por los datos reales del negocio. Archivo: `contact.component.html:11,25`

## Paso 5 — Links muertos en el footer ✅

"Privacidad" / "Términos" apuntan a `href="#"` (páginas inexistentes).

- [x] Hecho — se quitaron ambos links del footer (no hay contenido legal real todavía para publicar páginas). También se eliminaron las claves `footer.privacy`/`footer.terms` de `i18n.service.ts` por quedar sin uso. Archivos: `footer.component.html`, `i18n.service.ts`.
- `ng build` sin errores.

## Paso 6 — Sin archivos de test en todo el proyecto ✅

Había Karma/Jasmine instalado y `"test": "ng test"` en `package.json` pero cero `.spec.ts`.

- [x] Hecho — agregados `i18n.service.spec.ts` (3 tests) y `contact.component.spec.ts` (2 tests, incluye verificación de que el formulario captura los valores). `ng test --watch=false --browsers=ChromeHeadless` (CHROME_BIN → Edge): **5/5 SUCCESS**.
- **Pendiente dentro de este paso**: falta cobertura para el resto de componentes (navbar, hero, services, about, properties, testimonials, footer) — se puede ir sumando de a poco.

## Paso 7 — `[innerHTML]` con contenido de i18n

Usado en varios templates (hero, about, services, props titles). Seguro hoy porque son constantes hardcodeadas en `i18n.service.ts`, pero sería vector de XSS si esas traducciones llegan a venir de un CMS/API externa algún día.

- [ ] Pendiente — decidir si vale la pena mitigar ahora o solo dejarlo documentado.

## Paso 8 — Inconsistencia de copy

`about.badge` dice "15+" pero `hero.stat2` dice "15".

- [ ] Pendiente — confirmar con el negocio si es intencional y unificar.

## Paso 9 — SEO: meta tags

Falta `meta description` y Open Graph/Twitter cards en `src/index.html`.

- [ ] Pendiente

## Paso 10 — SEO: robots.txt y sitemap.xml

- [ ] Pendiente

## Paso 11 — SEO: datos estructurados JSON-LD

Sin `RealEstateAgent`/`LocalBusiness` schema.

- [ ] Pendiente

## Paso 12 — SSR/prerender

App 100% CSR — considerar SSR/prerender de Angular para SEO y LCP.

- [ ] Pendiente

## Paso 13 — Fotos reales en vez de emojis

Tarjetas de propiedades usan emojis como imagen (`properties.component.html`).

- [ ] Pendiente

## Paso 14 — Preconnect a Google Fonts

- [ ] Pendiente — agregar `<link rel="preconnect">` en `index.html`.
