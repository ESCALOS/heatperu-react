import Breadcrumb from "@/Components/Breadcrumb";
import ClientList from "@/Components/ClientList";
import GuestLayout from "@/Layouts/GuestLayout";

type Props = {};

function About({}: Props) {
    return (
        <GuestLayout title="Nosotros">
            <Breadcrumb title="Nosotros" imagePath="banner1.webp" />
            <div className="container py-12 space-y-8">
                <div className="grid items-center gap-8 lg:grid-cols-3">
                    <img
                        className="order-2 object-cover lg:order-1"
                        src="/images/about/1.jpeg"
                        alt="Heat Factory"
                    />
                    <div className="order-1 space-y-4 text-sm text-justify lg:order-2 lg:col-span-2 text-zinc-700">
                        <p>
                            <strong>HEAT FACTORY SAC</strong> es una empresa
                            fundada en 2014, de capitales peruanos. En sus
                            inicios, la empresa se concentró en la importación
                            de quemadores pequeños, utilizados principalmente en
                            hornos de panadería e incineradores. Aquello fue
                            solo el punto de partida y, con el tiempo, la oferta
                            de líneas de productos fue expandiéndose de forma
                            exponencial.
                        </p>
                        <p>
                            Primero, se inició la importación y distribución de
                            repuestos para los quemadores de las marcas{" "}
                            <strong>Baite</strong> y <strong>Wayne</strong>. Con
                            ello, se incorporaron las marcas{" "}
                            <strong>Beckett</strong>, <strong>Riello</strong>,{" "}
                            <strong>Allanson</strong>, <strong>Hago</strong>,{" "}
                            <strong>Honeywell</strong>, <strong>Suntec</strong>,{" "}
                            <strong>General</strong> y <strong>Westwood</strong>{" "}
                            al portafolio de representaciones de la empresa.
                            Segundo, se inició la importación de quemadores de
                            mayor tamaño; en aquel entonces en lo que
                            correspondía a quemadores a Diesel se ofrecía la
                            marca <strong>Baite</strong>, mientras que, para
                            quemadores a mediana y gran capacidad,{" "}
                            <strong>Riello</strong>, <strong>Powerflame</strong>{" "}
                            y <strong>Webster</strong> eran los proveedores
                            elegidos.
                        </p>
                        <p>
                            <b>A partir del 2017</b>, se inicia una política de
                            expansión y consolidación como una empresa capaz de
                            ofrecer soluciones integrales en todo lo referente a
                            procesos termodinámicos.{" "}
                            <b>
                                En dicha etapa, la primera alianza se dio con el
                                fabricante de quemadores Baite, fabricante de
                                origen chino que dio a Heat Factory su
                                representación exclusiva para toda Sudamérica.
                            </b>{" "}
                            Luego de dicha sociedad, se comienzan a estrechar
                            lazos con{" "}
                            <b>
                                fabricantes de equipos y accesorios europeos y
                                norteamericanos
                            </b>
                            . Es así como meses más tarde, la adquisición de
                            productos de marcas como <strong>Siemens</strong>,{" "}
                            <strong>Honeywell</strong>, <strong>Dungs</strong> y{" "}
                            <strong>Pietro Fiorentini</strong>, fortaleció la
                            capacidad de respaldar y dar soporte técnico a
                            cualquier quemador de procedencia europea o
                            asiática; llámese: <strong>Baltur</strong>,{" "}
                            <strong>Ecoflam</strong>, <strong>Riello</strong>,{" "}
                            <strong>Weishaupt</strong>, <b>entre otros</b>.
                        </p>
                    </div>
                </div>
                <div className="grid items-center gap-8 lg:grid-cols-3">
                    <div className="space-y-4 text-sm text-justify lg:col-span-2 text-zinc-700">
                        <p>
                            <b>
                                En el 2019, Heat Factory llega a acuerdos con
                                los principales fabricantes de calderas de vapor
                                en Peru y Bolivia
                            </b>
                            , convirtiéndose asi socio y proveedor principal.
                            Como resultado de dicho acuerdo,{" "}
                            <b>
                                Heat Factory se convierte en el primer
                                distribuidor de quemadores en Perú y Bolivia
                            </b>
                            , con más de 2,500 unidades por año e incrementando
                            su disponibilidad de quemadores, desde los más
                            pequeños con una capacidad de 200,000 BTU/Hora hasta
                            los 64,000,000 BTU/Hora.{" "}
                            <b>
                                Hoy se puede afirmar con total certeza, que Heat
                                Factory mantiene el stock más grande de
                                quemadores en la región
                            </b>
                            , atendiendo solicitudes locales e internacionales
                            en diversos sectores comerciales e industriales.
                        </p>
                        <p>
                            Han pasado casi 10 años desde que Heat Factory abrió
                            sus puertas. En todo este tiempo, la empresa ha
                            crecido de forma sostenida, complementando la venta
                            de equipos y repuestos con otros servicios tales
                            como: la{" "}
                            <strong>
                                selección, desarrollo y ejecución de proyectos
                            </strong>{" "}
                            llave en mano; instalaciones de todo tipo de
                            quemadores y equipos relacionados, mantenimiento de
                            calderas y calentadores de agua, automatización de
                            procesos térmicos, etc.
                        </p>
                        <p>
                            <b>
                                Heat Factory obedece un conjunto de principios
                                éticos muy fuertes, los cuales se resumen en el
                                valor de la palabra, el respeto mutuo y el
                                cumplimento de las responsabilidades.
                            </b>{" "}
                            Son estos preceptos los que han transformado a Heat
                            Factory en un pionero en la industria de procesos
                            térmicos y bajo los cuales aspira a seguir mejorando
                            día con día.
                        </p>
                    </div>
                    <img
                        className="object-cover object-right"
                        src="/images/about/2.jpeg"
                        alt="Heat Factory"
                    />
                </div>
            </div>
            <div className="container">
                <ClientList />
            </div>
        </GuestLayout>
    );
}

export default About;
