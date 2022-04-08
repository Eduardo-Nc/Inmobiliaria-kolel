import React, { Fragment } from 'react';


const Plano = ({ data, numeroLotePropiedad, abrirCotizador }) => {

        let reservado = "#ffff00";
        let disponible = "#70954a";
        let vendido = "#ff0000";

        // fill={data.filter(lote => lote.nombre_lote === "368")[0].estado_lote === 3 ? disponible : data.filter(lote => lote.nombre_lote === "368")[0].estado_lote === 2 ? reservado : data.filter(lote => lote.nombre_lote === "368")[0].estado_lote === 1 ? vendido : ""}

        const definirColores = (numLote) => {

                let resultado = data.filter(lote => lote.nombre_lote === numLote);


                let color = resultado.length === 0 ? "#70954a" : resultado[0].estado_lote === 3 ? disponible : resultado[0].estado_lote === 2 ? reservado : resultado[0].estado_lote === 1 && vendido

                return color
        }



        return (

                <Fragment>
                        <svg className="plano-petzbalam" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", overflow: "scroll", shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }} viewBox="0 0 2500 2500" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
	M1781.825,237.387h-31.247V84.066l50.142-0.879l0.091-0.044v135.259C1800.811,228.843,1792.268,237.387,1781.825,237.387z"/>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(379)} onClick={() => abrirCotizador(379)} >
                                        <rect x="1703.422" y="262.792" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("379")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="77.14" height="100.021" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(378)} onClick={() => abrirCotizador(378)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("378")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1703.422,362.873h77.14v51.589l-21.816,41.648c-2.515,3.798-3.352,5.323-9.284,6.784h-46.039V362.873z"/>
                                </a>

                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1780.562,262.854v151.02l47.307-94.15c3.189-5.664,0.653-11.048-7.829-16.143c-17.47-9.53-27.051-21.72-30.675-35.92
	C1787.488,263.993,1785.459,262.737,1780.562,262.854z"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#F7F719" stroke-width="0.013" stroke-miterlimit="10" d="
	M684,496.133h-44.1l44.1,94.32V496.133 M639.901,496.133l44.1,94.32h-44.1V496.133"/>


                                {/* 342 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(342)} onClick={() => abrirCotizador(342)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("342")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	503.52,489.473 507.181,635.333 551.401,634.554 551.401,489.473 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(341)} onClick={() => abrirCotizador(341)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("341")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	595.62,633.833 595.62,489.473 551.401,489.473 551.401,634.554 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(340)} onClick={() => abrirCotizador(340)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("340")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	639.902,633.298 639.9,489.473 595.62,489.473 595.713,634.073 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(339)} onClick={() => abrirCotizador(339)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("339")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	683.941,632.513 684.061,489.473 639.841,489.473 639.842,633.298 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(338)} onClick={() => abrirCotizador(338)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("338")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	728.34,632.333 728.34,489.473 684.12,489.473 684.001,632.333 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(337)} onClick={() => abrirCotizador(337)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("337")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	772.561,630.833 772.561,489.473 728.34,489.473 728.34,632.333 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(336)} onClick={() => abrirCotizador(336)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("336")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	816.841,630.053 816.841,489.473 772.561,489.473 772.561,630.833 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(335)} onClick={() => abrirCotizador(335)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("335")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	861.061,629.333 816.841,630.053 816.841,489.473 861.061,489.473 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(334)} onClick={() => abrirCotizador(334)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("334")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	905.281,627.833 905.281,489.473 861.061,489.473 861.061,628.553 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(333)} onClick={() => abrirCotizador(333)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("333")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	949.56,489.473 905.281,489.473 905.281,628.553 949.56,627.833 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(332)} onClick={() => abrirCotizador(332)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("332")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	993.78,489.473 993.78,626.273 949.56,627.833 949.56,489.473 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(331)} onClick={() => abrirCotizador(331)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("331")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1038.12,489.473 1038.12,626.273 993.78,627.054 993.78,489.473 "/>
                                </a>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(330)} onClick={() => abrirCotizador(330)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("330")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1141.5,571.433 1141.558,506.092 1131.553,489.418 1038.12,489.473 1038.12,571.433 "/>
                                </a>
                                {/*  */}

                                <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1141.5,642.353 1080.48,642.353 1081.44,625.553 1038.12,626.273 1038.12,571.433 1141.5,571.433 "/>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(328)} onClick={() => abrirCotizador(328)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("328")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1069.14,842.394 1074.84,742.373 1141.5,742.373 1141.5,842.394 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(329)} onClick={() => abrirCotizador(329)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("329")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1080.48,642.353 1141.5,642.353 1141.5,742.373 1074.84,742.373 "/>
                                </a>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(317)} onClick={() => abrirCotizador(317)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("317")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1527.061,905.273l-28.26,54.779h-122.88c9.422-6.586,17.111-15.769,23.071-27.539l14.79-27.24H1527.061z"/>
                                </a>

                                <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#F7F719" stroke-width="0.013" stroke-miterlimit="10" d="
	M1173.3,1040.873h-50.04l50.04,23.28V1040.873 M1123.261,1040.873l50.04,23.28h-50.04V1040.873"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#F7F719" stroke-width="0.013" stroke-miterlimit="10" d="
	M1278.96,1038.653h-55.74l55.68,39.06L1278.96,1038.653 M1223.221,1038.653l55.68,39.06h-55.68V1038.653"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#F7F719" stroke-width="0.013" stroke-miterlimit="10" d="
	M1543.381,873.653h-112.44l96.12,31.62L1543.381,873.653 M1430.94,873.653l96.12,31.62h-113.28L1430.94,873.653"/>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(309)} onClick={() => abrirCotizador(309)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("309")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1056.601,1064.153 1050.181,1177.013 1123.261,1176.953 1123.261,1064.153 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(310)} onClick={() => abrirCotizador(310)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("310")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1123.261,1038.653 1123.261,1177.013 1173.3,1176.953 1173.3,1038.653 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(311)} onClick={() => abrirCotizador(311)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("311")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1223.221,1038.653 1223.281,1177.013 1173.301,1176.953 1173.301,1038.653 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(312)} onClick={() => abrirCotizador(312)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("312")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1278.96,1038.653 1278.84,1176.718 1223.28,1176.836 1223.221,1038.653 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(313)} onClick={() => abrirCotizador(313)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("313")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1328.82,1176.653 1278.841,1176.718 1278.96,1038.653 1328.82,1038.653 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(314)} onClick={() => abrirCotizador(314)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("314")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="10.9256" points="
	1458.24,1038.653 1388.55,1173.293 1380.84,1177.013 1328.82,1177.013 1328.82,1038.653 "/>
                                </a>


                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(315)} onClick={() => abrirCotizador(315)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("315")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1279.021,1001.934 1278.96,1038.653 1458.24,1038.653 1477.98,1000.373 "/>
                                </a>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(316)} onClick={() => abrirCotizador(316)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("316")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1278.96,971.934l0.236,29.998l198.784-1.559l20.82-40.321h-122.88c-10.425,6.986-17.747,10.26-34.32,11.821L1278.96,971.934z"/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(318)} onClick={() => abrirCotizador(318)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("318")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1554.54,851.934 1527.061,905.273 1413.781,905.273 1442.701,851.934 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(319)} onClick={() => abrirCotizador(319)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("319")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1582.08,798.593 1554.54,851.934 1442.701,851.934 1463.34,813.713 1465.74,798.593 "/>
                                </a>

                                {/* 327 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(327)} onClick={() => abrirCotizador(327)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("327")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1174.86,782.394v60l52.92-0.181c21.924-2.985,37.8-12.271,47.125-28.381l-0.025-31.438H1174.86z"/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(326)} onClick={() => abrirCotizador(326)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("326")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1175.042,722.333 1175.042,782.394 1275.063,782.273 1275.063,722.333 "/>
                                </a>

                                {/* 325 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(325)} onClick={() => abrirCotizador(325)} >
                                        <rect x="1174.86" y="660.113" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("325")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="100.021" height="62.22" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(324)} onClick={() => abrirCotizador(324)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("324")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1341.541,660.113h-66.66l-0.005,153.694c14.565-22.487,31.857-41.979,66.725-42.153L1341.541,660.113z"/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(323)} onClick={() => abrirCotizador(323)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("323")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1408.261,660.113 1408.261,771.893 1341.601,771.653 1341.541,660.113 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(322)} onClick={() => abrirCotizador(322)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("322")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1474.921,660.113 1474.921,771.833 1408.261,771.893 1408.261,660.113 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(321)} onClick={() => abrirCotizador(321)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("321")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1541.641,660.113 1541.641,771.833 1474.921,771.893 1474.921,660.113 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(320)} onClick={() => abrirCotizador(320)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("320")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1595.82,771.893l-54.18-0.06v-111.72h99.689c5.043,0.639,7.802,3.195,8.19,7.74L1595.82,771.893z"/>
                                </a>

                                <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#F7F719" stroke-width="0.013" stroke-miterlimit="10" d="
	M943.621,1215.533h-60l60,78.36V1215.533 M883.621,1215.533l60,78.36h-60V1215.533"/>


                                <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#F7F719" stroke-width="0.013" stroke-miterlimit="10" d="
	M1003.621,1214.813h-60l60,76.68V1214.813 M943.621,1214.813l60,76.68h-60V1214.813"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#F7F719" stroke-width="0.013" stroke-miterlimit="10" d="
	M1183.681,1212.773h-60.06l60.06,68.7V1212.773 M1123.621,1212.773l60.06,68.7h-60.06V1212.773"/>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(266)} onClick={() => abrirCotizador(266)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("266")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	428.22,1220.993 403.561,1327.313 468.96,1326.232 469.921,1220.693 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(267)} onClick={() => abrirCotizador(267)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("267")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	523.561,1220.453 523.561,1324.854 468.96,1326.232 469.921,1220.693 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(268)} onClick={() => abrirCotizador(268)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("268")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	583.56,1219.974 583.56,1324.373 523.561,1325.333 523.561,1219.974 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(269)} onClick={() => abrirCotizador(269)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("269")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	643.56,1218.474 583.56,1219.974 583.56,1324.373 643.56,1323.413 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(270)} onClick={() => abrirCotizador(270)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("270")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	703.621,1218.474 703.621,1322.394 643.56,1323.413 643.56,1219.254 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(271)} onClick={() => abrirCotizador(271)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("271")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	763.621,1217.753 763.621,1321.434 703.621,1322.394 703.621,1218.474 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(272)} onClick={() => abrirCotizador(272)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("272")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	823.621,1217.033 763.621,1217.753 763.621,1321.434 823.621,1320.413 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(273)} onClick={() => abrirCotizador(273)} >
                                        <rect x="823.621" y="1216.313" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("273")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="59.999" height="103.141" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(274)} onClick={() => abrirCotizador(274)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("274")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	943.62,1214.813 883.621,1216.313 883.621,1319.453 943.62,1318.493 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(275)} onClick={() => abrirCotizador(275)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("275")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1003.621,1214.813 1003.621,1317.473 943.62,1318.493 943.62,1214.813 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(276)} onClick={() => abrirCotizador(276)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("276")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1063.681,1213.553 1063.622,1316.513 1003.62,1317.473 1004.031,1214.094 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(277)} onClick={() => abrirCotizador(277)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("277")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1123.621,1212.773 1123.621,1315.553 1062.27,1316.513 1063.681,1213.553 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(278)} onClick={() => abrirCotizador(278)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("278")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1183.681,1212.773 1183.681,1314.533 1123.621,1315.553 1123.621,1212.773 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(279)} onClick={() => abrirCotizador(279)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("279")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1243.68,1211.514 1243.68,1313.572 1183.681,1314.533 1183.681,1212.773 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(280)} onClick={() => abrirCotizador(280)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("280")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1314.541,1211.514 1314.601,1312.373 1243.68,1313.572 1243.412,1211.519 "/>
                                </a>

                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1362.209,1224.882l-47.609,87.491l-0.06-100.859l38.759-1.141C1361.251,1210.854,1364.803,1216.939,1362.209,1224.882z"/>



                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(467)} onClick={() => abrirCotizador(467)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("467")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1696.621,649.313 1729.081,586.254 1819.32,652.133 1786.141,716.603 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(462)} onClick={() => abrirCotizador(462)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("462")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1854.135,343.959L1833,384.772l85.32,62.281l24.899-51.181l-74.778-54.599C1861.695,337.346,1857.646,339.998,1854.135,343.959z"/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(463)} onClick={() => abrirCotizador(463)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("463")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1807.02,435.174 1833,384.772 1918.32,447.053 1893.48,498.233 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(464)} onClick={() => abrirCotizador(464)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("464")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1781.04,485.513 1807.02,435.174 1893.48,498.233 1868.581,549.413 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(465)} onClick={() => abrirCotizador(465)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("465")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1755.061,535.913 1781.074,485.538 1868.581,549.413 1843.74,600.593 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(466)} onClick={() => abrirCotizador(466)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("466")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1729.081,586.254 1755.061,535.913 1843.74,600.593 1818.841,651.774 "/>
                                </a>

                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1774.86,738.533l11.28-21.93l-89.52-67.29l-37.669,72.989c-3.294,11.699,0.595,15.832,8.028,16.231H1774.86z"/>


                                <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#70954A" stroke-width="0.013" stroke-miterlimit="10" d="
	M1913.82,651.773h-94.979l116.7,15.84L1913.82,651.773 M1818.841,651.773l116.7,15.84h-94.98L1818.841,651.773"/>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(474)} onClick={() => abrirCotizador(474)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("474")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1943.22,395.873l-24.899,51.181l94.896,69.288l10.023-19.293c8.297-18.793,2.884-37.04-16.42-54.734L1943.22,395.873z"/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(473)} onClick={() => abrirCotizador(473)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("473")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1987.381,566.813 2013.48,516.533 1918.32,447.053 1893.48,498.233 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(472)} onClick={() => abrirCotizador(472)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("472")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1961.894,616.546 1868.581,549.413 1893.48,498.233 1987.501,566.874 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(471)} onClick={() => abrirCotizador(471)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("471")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1935.54,667.612 1961.521,617.273 1868.581,549.413 1843.74,600.593 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(470)} onClick={() => abrirCotizador(470)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("470")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1909.561,718.013 1935.54,667.612 1843.74,600.593 1818.841,651.774 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(469)} onClick={() => abrirCotizador(469)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("469")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1775.041,738.113l44.279-85.98l90.24,65.88l-7.613,14.806c-1.928,3.426-4.625,5.479-8.377,5.654L1775.041,738.113z"/>
                                </a>

                                {/* 293 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(293)} onClick={() => abrirCotizador(293)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("293")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1861.74,810.653 1834.021,864.413 1718.072,847.682 1746.18,793.973 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(294)} onClick={() => abrirCotizador(294)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("294")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1808.041,914.753 1693.08,898.193 1718.072,847.682 1834.021,864.413 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(295)} onClick={() => abrirCotizador(295)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("295")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1782.841,963.653 1808.041,914.753 1693.282,898.193 1667.25,946.973 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(296)} onClick={() => abrirCotizador(296)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("296")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1643.221,996.053 1757.641,1012.554 1782.841,963.653 1668.121,947.093 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(297)} onClick={() => abrirCotizador(297)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("297")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1616.791,1044.773 1642.021,995.873 1757.641,1012.554 1732.38,1061.453 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(298)} onClick={() => abrirCotizador(298)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("298")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1591.801,1096.913 1618.26,1045.014 1732.38,1061.453 1705.68,1113.293 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(299)} onClick={() => abrirCotizador(299)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("299")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1568.4,1142.873 1591.801,1096.913 1705.68,1113.293 1681.98,1159.253 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(300)} onClick={() => abrirCotizador(300)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("300")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1543.439,1191.773 1568.4,1142.873 1681.98,1159.253 1656.721,1208.153 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(301)} onClick={() => abrirCotizador(301)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("301")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1518.48,1240.732 1543.439,1191.773 1656.779,1208.153 1631.521,1257.053 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(302)} onClick={() => abrirCotizador(302)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("302")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1493.58,1289.633 1518.48,1240.732 1631.521,1257.053 1606.321,1305.953 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(303)} onClick={() => abrirCotizador(303)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("303")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1468.62,1338.594 1493.58,1289.633 1606.321,1305.953 1581.121,1354.794 "/>
                                </a>

                                {/* 304 */}

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(304)} onClick={() => abrirCotizador(304)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("304")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1443.721,1387.554l24.899-48.96l112.501,16.2l-21.932,42.529c-2.076,4.282-6.091,5.931-11.879,5.17L1443.721,1387.554z"/>
                                </a>


                                <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#70954A" stroke-width="0.013" stroke-miterlimit="10" d="
	M1499.521,1090.913h-30.72l30.72,12.9V1090.913 M1468.801,1090.913l30.72,12.9h-37.38L1468.801,1090.913"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#70954A" stroke-width="0.013" stroke-miterlimit="10" d="
	M1668.121,947.093h-67.141l62.641,8.82L1668.121,947.093 M1600.98,947.093l62.641,8.82h-62.641V947.093"/>

                                {/* 292 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(292)} onClick={() => abrirCotizador(292)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("292")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1630.592,777.304 1602.84,831.053 1718.072,847.682 1745.88,794.573 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(291)} onClick={() => abrirCotizador(291)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("291")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1576.86,881.393 1693.282,898.193 1718.761,847.792 1602.84,831.053 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(290)} onClick={() => abrirCotizador(290)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("290")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1551.66,930.293 1576.86,881.393 1693.08,898.193 1668.158,947.093 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(289)} onClick={() => abrirCotizador(289)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("289")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1526.4,979.193 1551.66,930.293 1668.4,947.139 1643.221,996.053 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(288)} onClick={() => abrirCotizador(288)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("288")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1501.201,1028.093 1616.791,1044.773 1642.021,995.873 1526.4,979.193 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(287)} onClick={() => abrirCotizador(287)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("287")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1474.44,1079.934 1504.912,1028.604 1621.973,1045.525 1592.135,1096.913 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(286)} onClick={() => abrirCotizador(286)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("286")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1450.74,1125.894 1568.4,1142.873 1592.135,1096.913 1474.44,1079.934 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(285)} onClick={() => abrirCotizador(285)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("285")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1425.541,1174.793 1450.74,1125.894 1568.4,1142.873 1543.439,1191.773 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(284)} onClick={() => abrirCotizador(284)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("284")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1400.341,1223.693 1425.541,1174.793 1543.439,1191.773 1518.48,1240.732 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(283)} onClick={() => abrirCotizador(283)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("283")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1375.14,1272.593 1400.341,1223.693 1518.48,1240.732 1493.58,1289.633 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(282)} onClick={() => abrirCotizador(282)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("282")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1349.88,1321.434 1375.14,1272.593 1493.58,1289.633 1468.62,1338.594 "/>
                                </a>

                                {/* 281 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(281)} onClick={() => abrirCotizador(281)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("281")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1443.721,1387.554l24.899-48.96l-118.74-17.16l-17.89,34.694c-4.109,7.157-1.741,12.29,5.364,15.945L1443.721,1387.554z"/>
                                </a>


                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1861.74,810.653l12.508-24.191c1.934-6.875,0.437-12.183-7.628-14.49l-229.069,0.107l-6.99,5.214L1861.74,810.653z"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1736.041,500.093l-68.76,133.32v-143.94c19.654,0,39.31,0,58.965,0C1732.968,490.963,1735.254,495.083,1736.041,500.093z"/>

                                {/* 453 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(453)} onClick={() => abrirCotizador(453)} >
                                        <rect x="1224.9" y="489.473" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("453")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="49.981" height="143.94" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(454)} onClick={() => abrirCotizador(454)} >
                                        <rect x="1274.881" y="489.473" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("454")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="50.04" height="143.94" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(455)} onClick={() => abrirCotizador(455)} >
                                        <rect x="1324.92" y="489.473" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("455")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="49.98" height="143.94" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(456)} onClick={() => abrirCotizador(456)} >
                                        <rect x="1374.9" y="489.473" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("456")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="50.04" height="143.94" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(457)} onClick={() => abrirCotizador(457)} >
                                        <rect x="1424.94" y="489.473" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("457")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="49.98" height="143.94" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(458)} onClick={() => abrirCotizador(458)} >
                                        <rect x="1474.921" y="489.473" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("458")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="50.04" height="143.94" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(459)} onClick={() => abrirCotizador(459)} >
                                        <rect x="1524.96" y="489.473" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("459")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="49.98" height="143.94" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(460)} onClick={() => abrirCotizador(460)} >
                                        <rect x="1574.94" y="489.473" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("460")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="50.04" height="143.94" />
                                </a>
                                {/* 461 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(461)} onClick={() => abrirCotizador(461)} >
                                        <rect x="1625.424" y="489.473" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("461")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="41.857" height="143.94" />
                                </a>
                                {/* 452 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(452)} onClick={() => abrirCotizador(452)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("452")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1191.218,489.473h33.834v143.94h-42.992c-3.844,0-6.988-3.145-6.988-6.989V505.619
	C1175.072,496.739,1182.338,489.473,1191.218,489.473z"/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(218)} onClick={() => abrirCotizador(218)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("218")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M426.541,1412.693l-11.552,46.594c-2.323,7.2,0.067,12.384,5.731,16.166l111.42,16.26l-2.04-71.939L426.541,1412.693z"/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(219)} onClick={() => abrirCotizador(219)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("219")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	624.54,1504.793 622.98,1426.073 530.101,1419.773 532.141,1491.713 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(220)} onClick={() => abrirCotizador(220)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("220")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	715.921,1432.434 716.941,1518.233 624.54,1505.093 622.98,1426.073 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(221)} onClick={() => abrirCotizador(221)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("221")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	782.94,1527.833 782.22,1436.934 715.921,1432.434 716.941,1518.233 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(222)} onClick={() => abrirCotizador(222)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("222")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	848.94,1537.434 782.94,1527.833 782.22,1436.934 848.58,1441.434 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(223)} onClick={() => abrirCotizador(223)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("223")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	914.941,1547.033 914.941,1446.085 848.58,1441.434 848.94,1537.434 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(224)} onClick={() => abrirCotizador(224)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("224")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	981.601,1556.693 981.601,1455.593 914.941,1446.593 914.941,1547.033 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(225)} onClick={() => abrirCotizador(225)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("225")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1048.26,1566.294 981.601,1556.693 981.601,1455.593 1048.26,1465.253 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(226)} onClick={() => abrirCotizador(226)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("226")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1114.98,1575.894 1114.98,1474.854 1048.921,1465.313 1048.26,1566.294 "/>
                                </a>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(227)} onClick={() => abrirCotizador(227)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("227")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1181.641,1484.453l-66.66-9.6v101.04l53.323,7.7c7.865,0.426,13.461-1.604,13.397-9.757L1181.641,1484.453z"/>
                                </a>


                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(265)} onClick={() => abrirCotizador(265)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("265")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M439.62,1360.493l-13.079,52.2l103.789,7.08l-2.088-66.9l-80.281,1.44C443.53,1354.637,441.096,1357.06,439.62,1360.493z"/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(264)} onClick={() => abrirCotizador(264)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("264")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	622.98,1426.073 621.57,1352.063 528.181,1352.873 530.33,1419.773 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(263)} onClick={() => abrirCotizador(263)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("263")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	715.921,1432.434 714.901,1350.443 621.57,1352.063 622.98,1426.073 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(262)} onClick={() => abrirCotizador(262)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("262")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	782.22,1436.934 781.56,1349.634 714.901,1350.443 715.921,1432.434 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(261)} onClick={() => abrirCotizador(261)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("261")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	848.58,1441.434 848.221,1347.293 781.56,1349.634 781.56,1436.934 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(260)} onClick={() => abrirCotizador(260)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("260")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	914.941,1445.993 848.58,1441.434 848.221,1347.293 914.941,1346.152 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(259)} onClick={() => abrirCotizador(259)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("259")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	981.601,1345.014 981.601,1445.033 914.941,1446.593 914.941,1346.152 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(258)} onClick={() => abrirCotizador(258)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("258")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1048.26,1443.894 1048.26,1343.873 981.601,1345.014 981.601,1444.854 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(257)} onClick={() => abrirCotizador(257)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("257")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1114.98,1342.673 1114.98,1442.693 1048.26,1443.773 1048.26,1343.873 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(256)} onClick={() => abrirCotizador(256)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("256")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1181.641,1441.554l-66.66,1.199v-100.08l54.27-0.93c7.207-0.687,10.745,2.79,12.27,8.55L1181.641,1441.554z"/>
                                </a>

                                <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1181.641,1441.554 1181.641,1484.453 918.521,1446.509 "/>

                                {/* 228 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(228)} onClick={() => abrirCotizador(228)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("228")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1277.041,1599.293l-1.795-101.339l-60.245-8.7v89.238c-0.31,8.121,3.112,12.828,11.039,13.417L1277.041,1599.293z"/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(229)} onClick={() => abrirCotizador(229)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("229")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1330.5,1607.032 1330.5,1505.934 1275.245,1497.954 1277.214,1599.293 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(230)} onClick={() => abrirCotizador(230)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("230")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1388.221,1615.313 1388.221,1514.273 1330.5,1505.934 1330.846,1607.032 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(231)} onClick={() => abrirCotizador(231)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("231")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1446,1623.653 1446,1522.613 1388.221,1514.273 1388.221,1615.313 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(232)} onClick={() => abrirCotizador(232)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("232")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1503.721,1631.994 1503.721,1530.953 1446,1522.613 1446,1623.653 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(233)} onClick={() => abrirCotizador(233)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("233")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1561.5,1640.333 1561.5,1539.294 1503.721,1530.953 1503.721,1631.994 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(255)} onClick={() => abrirCotizador(255)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("255")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1215,1399.794v89.46l60.245,8.7l-2.346-101.4l-47.189-6.721C1219.237,1389.519,1215.73,1392.919,1215,1399.794z"/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(254)} onClick={() => abrirCotizador(254)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("254")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1330.5,1404.893 1272.899,1396.974 1274.94,1497.954 1330.5,1505.934 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(253)} onClick={() => abrirCotizador(253)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("253")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1388.221,1413.233 1388.221,1514.273 1330.5,1505.934 1330.5,1404.893 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(252)} onClick={() => abrirCotizador(252)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("252")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1446,1522.613 1388.311,1514.273 1388.221,1413.233 1446,1421.573 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(251)} onClick={() => abrirCotizador(251)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("251")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1503.44,1429.854 1446,1421.573 1446,1522.613 1503.721,1530.953 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(250)} onClick={() => abrirCotizador(250)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("250")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1561.258,1438.192 1561.5,1539.294 1503.721,1530.953 1503.721,1429.854 "/>
                                </a>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(249)} onClick={() => abrirCotizador(249)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("249")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1578,1440.593 1578,1541.633 1637.4,1550.213 1637.4,1449.174 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(248)} onClick={() => abrirCotizador(248)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("248")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1696.801,1457.753 1696.801,1558.794 1637.4,1550.213 1637.4,1449.174 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(247)} onClick={() => abrirCotizador(247)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("247")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1756.201,1466.333 1696.801,1457.753 1696.801,1558.794 1756.201,1567.373 "/>
                                </a>

                                {/* 234 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(234)} onClick={() => abrirCotizador(234)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("234")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1578,1642.733 1578,1541.633 1637.4,1550.213 1637.4,1651.313 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(235)} onClick={() => abrirCotizador(235)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("235")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1696.801,1659.833 1637.4,1651.313 1637.4,1550.213 1696.801,1558.794 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(236)} onClick={() => abrirCotizador(236)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("236")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1756.201,1668.413 1696.801,1659.833 1696.801,1558.794 1756.201,1567.373 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(237)} onClick={() => abrirCotizador(237)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("237")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1815.601,1575.953 1756.201,1567.373 1756.201,1668.413 1815.601,1676.993 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(238)} onClick={() => abrirCotizador(238)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("238")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1875.001,1584.532 1875.001,1685.572 1815.601,1676.993 1815.601,1575.953 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(239)} onClick={() => abrirCotizador(239)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("239")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1934.557,1694.153 1875.001,1685.572 1875.001,1584.532 1934.401,1593.053 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(240)} onClick={() => abrirCotizador(240)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("240")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	2015.221,1705.794 2015.221,1604.754 1934.172,1593.053 1934.941,1694.214 "/>
                                </a>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(246)} onClick={() => abrirCotizador(246)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("246")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1815.248,1474.833 1756.201,1466.333 1756.201,1567.373 1815.727,1575.953 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(245)} onClick={() => abrirCotizador(245)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("245")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1875.001,1584.532 1875.001,1483.433 1815.601,1474.854 1815.601,1575.953 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(244)} onClick={() => abrirCotizador(244)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("244")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1934.401,1593.053 1934.401,1492.012 1874.813,1483.422 1875.001,1584.503 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(243)} onClick={() => abrirCotizador(243)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("243")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	2015.221,1604.754 2015.221,1535.394 1968.841,1497.773 1934.401,1492.012 1934.172,1593.053 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(241)} onClick={() => abrirCotizador(241)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("241")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	2081.881,1715.424 2081.88,1589.573 2015.221,1535.394 2015.221,1705.794 "/>
                                </a>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(242)} onClick={() => abrirCotizador(242)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("242")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	2148.541,1725.054 2081.88,1715.394 2081.88,1589.573 2148.541,1643.753 "/>
                                </a>

                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M2234.324,1737.371c10.016,0.223,14.81-8.901,7.756-17.599l-93.539-76.02v81.301L2234.324,1737.371z"/>
                                <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1561.258,1438.192 1578,1440.593 1578.236,1642.733 1561.5,1640.333 "/>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(186)} onClick={() => abrirCotizador(186)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("186")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	2476.08,1799.333 2449.801,1901.093 2437.74,1901.513 2351.189,1888.183 2360.056,1781.956 "/>
                                </a>

                                <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#9B97C7" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	2489.341,1801.253 2463.66,1900.613 2449.801,1901.093 2476.354,1799.373 "/>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(306)} onClick={() => abrirCotizador(306)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("306")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1666.741,1261.734l-35.101,67.858l69.06,33l30.12-58.32l-42.18-35.639C1683.389,1264.425,1679.666,1251.097,1666.741,1261.734z"/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(305)} onClick={() => abrirCotizador(305)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("305")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1597.292,1396.264l34.642-67.238l68.767,33.567l-29.76,57.721l-66.239-9.54C1598.025,1408.766,1595.033,1404.281,1597.292,1396.264
	z"/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(307)} onClick={() => abrirCotizador(307)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("307")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1723.801,1427.934 1670.94,1420.313 1730.82,1304.272 1770.842,1336.793 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(308)} onClick={() => abrirCotizador(308)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("308")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1800.301,1438.973 1828.681,1383.773 1770.842,1336.793 1723.801,1427.934 "/>
                                </a>


                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1881.541,1450.733c6.416,0.021,16.617-5.788,7.771-17.683l-60.571-49.218l-28.439,55.14L1881.541,1450.733z"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M2136.297,412.677c26.108,22.125,26.092,48.842,10.387,78.314l-116.977,226.876c-2.551,6.745-6.799,9.302-12.674,7.844
	l-46.272-36.317c-4.848-3.221-5.68-8.432-0.339-16.702l83.039-161.492c15.938-41.86,2.908-77.12-40.212-105.521l-185.468-135.385
	l-3.66-23.28l17.643-21.205l35.579-1.811"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M2081.465,1430.254c9.434,6.575,10.593,12.994,5.047,19.288l-33.193,39.679c-15.814,10.237-31.39,9.797-46.672-3.777
	l-293.714-239.656c-15.558-17.197-17.767-38.727-4.396-65.312l119.018-230.755c5.215-10.072,11.23-9.334,16.846-6.407l40.166,32.646
	c6.594,4.206,7.566,10.11,2.835,17.738l-71.561,138.735c-18.185,40.504-7.759,75.546,29.055,105.552"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#6462AC" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1950.396,732.771l37.273,35.852c3.417,3.286,4.416,9.628,2.221,14.095l-75.427,153.444c-2.195,4.466-6.786,5.432-10.203,2.145
	l-37.273-35.852c-3.417-3.287-4.416-9.629-2.221-14.095l75.427-153.445C1942.389,730.45,1946.979,729.484,1950.396,732.771z"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1866.977,927.743l18.93,15.416c0.921,0.749,1.061,2.115,0.312,3.035l-4.032,4.951c-0.749,0.92-2.115,1.06-3.035,0.311
	l-18.93-15.415c-0.92-0.75-1.061-2.115-0.311-3.036l4.031-4.951C1864.691,927.133,1866.057,926.993,1866.977,927.743z"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M1975.861,714.116l18.93,15.415c0.92,0.75,1.061,2.115,0.311,3.036l-4.031,4.951c-0.75,0.92-2.115,1.06-3.036,0.311l-18.93-15.416
	c-0.92-0.75-1.06-2.115-0.311-3.036l4.032-4.951C1973.575,713.506,1974.941,713.366,1975.861,714.116z"/>
                                <text transform="matrix(1 0 0 1 518.0225 599.0659)" font-family="'Arial-BoldMT'" font-size="11.9999">342</text>
                                <text transform="matrix(1 0 0 1 564.751 599.0659)" font-family="'Arial-BoldMT'" font-size="11.9999">341</text>
                                <text transform="matrix(1 0 0 1 609.459 599.0659)" font-family="'Arial-BoldMT'" font-size="11.9999">340</text>
                                <text transform="matrix(1 0 0 1 652.4888 599.0659)" font-family="'Arial-BoldMT'" font-size="11.9999">339</text>
                                <text transform="matrix(1 0 0 1 696.7026 599.0659)" font-family="'Arial-BoldMT'" font-size="11.9999">338</text>
                                <text transform="matrix(1 0 0 1 740.9766 599.0659)" font-family="'Arial-BoldMT'" font-size="11.9999">337</text>
                                <text transform="matrix(1 0 0 1 785.1787 599.0659)" font-family="'Arial-BoldMT'" font-size="11.9999">336</text>
                                <text transform="matrix(1 0 0 1 829.3931 599.0659)" font-family="'Arial-BoldMT'" font-size="11.9999">335</text>
                                <text transform="matrix(1 0 0 1 873.5713 599.0659)" font-family="'Arial-BoldMT'" font-size="11.9999">334</text>
                                <text transform="matrix(1 0 0 1 917.9409 599.0659)" font-family="'Arial-BoldMT'" font-size="11.9999">333</text>
                                <text transform="matrix(1 0 0 1 962.2324 599.0659)" font-family="'Arial-BoldMT'" font-size="11.9999">332</text>
                                <text transform="matrix(1 0 0 1 1007.1904 599.0654)" font-family="'Arial-BoldMT'" font-size="11.9999">331</text>
                                <text transform="matrix(1 0 0 1 1080.395 551.5591)" font-family="'Arial-BoldMT'" font-size="11.9999">330</text>
                                <text transform="matrix(1 0 0 1 1099.7881 722.5591)" font-family="'Arial-BoldMT'" font-size="11.9999">329</text>
                                <text transform="matrix(1 0 0 1 1099.7881 821.3716)" font-family="'Arial-BoldMT'" font-size="11.9999">328</text>
                                <text transform="matrix(1 0 0 1 1210.458 821.3716)" font-family="'Arial-BoldMT'" font-size="11.9999">327</text>
                                <text transform="matrix(1 0 0 1 1212.4102 764.2485)" font-family="'Arial-BoldMT'" font-size="11.9999">326</text>
                                <text transform="matrix(1 0 0 1 1210.374 709.2485)" font-family="'Arial-BoldMT'" font-size="11.9999">325</text>
                                <text transform="matrix(1 0 0 1 1297.3691 709.2485)" font-family="'Arial-BoldMT'" font-size="11.9999">324</text>
                                <text transform="matrix(1 0 0 1 1365.3013 709.2485)" font-family="'Arial-BoldMT'" font-size="11.9999">323</text>
                                <text transform="matrix(1 0 0 1 1430.9473 709.2485)" font-family="'Arial-BoldMT'" font-size="11.9999">322</text>
                                <text transform="matrix(1 0 0 1 1497.9277 709.2485)" font-family="'Arial-BoldMT'" font-size="11.9999">321</text>
                                <text transform="matrix(1 0 0 1 1569.5107 709.2485)" font-family="'Arial-BoldMT'" font-size="11.9999">320</text>
                                <text transform="matrix(1 0 0 1 1494.9297 841.4365)" font-family="'Arial-BoldMT'" font-size="11.9999">319</text>
                                <text transform="matrix(1 0 0 1 1469.5625 894.2051)" font-family="'Arial-BoldMT'" font-size="11.9999">318</text>
                                <text transform="matrix(1 0 0 1 1450.7402 941.3975)" font-family="'Arial-BoldMT'" font-size="11.9999">317</text>
                                <text transform="matrix(1 0 0 1 1435.7012 989.8545)" font-family="'Arial-BoldMT'" font-size="11.9999">316</text>
                                <text transform="matrix(1 0 0 1 1412.6421 1029.3105)" font-family="'Arial-BoldMT'" font-size="11.9999">315</text>
                                <text transform="matrix(1 0 0 1 1353.5957 1148.2109)" font-family="'Arial-BoldMT'" font-size="11.9999">314</text>
                                <text transform="matrix(1 0 0 1 1294.3501 1135.8105)" font-family="'Arial-BoldMT'" font-size="11.9999">313</text>
                                <text transform="matrix(1 0 0 1 1241.6528 1135.8105)" font-family="'Arial-BoldMT'" font-size="11.9999">312</text>
                                <text transform="matrix(1 0 0 1 1189.8618 1135.8105)" font-family="'Arial-BoldMT'" font-size="11.9999">311</text>
                                <text transform="matrix(1 0 0 1 1138.8364 1135.8105)" font-family="'Arial-BoldMT'" font-size="11.9999">310</text>
                                <text transform="matrix(1 0 0 1 1076.4302 1135.8105)" font-family="'Arial-BoldMT'" font-size="11.9999">309</text>
                                <text transform="matrix(1 0 0 1 427.2974 1305.6816)" font-family="'Arial-BoldMT'" font-size="11.9999">266</text>
                                <text transform="matrix(1 0 0 1 486.8652 1305.5664)" font-family="'Arial-BoldMT'" font-size="11.9999">267</text>
                                <text transform="matrix(1 0 0 1 544.1709 1305.5664)" font-family="'Arial-BoldMT'" font-size="11.9999">268</text>
                                <text transform="matrix(1 0 0 1 604.1768 1305.5664)" font-family="'Arial-BoldMT'" font-size="11.9999">269</text>
                                <text transform="matrix(1 0 0 1 664.2251 1305.5664)" font-family="'Arial-BoldMT'" font-size="11.9999">270</text>
                                <text transform="matrix(1 0 0 1 724.939 1305.5664)" font-family="'Arial-BoldMT'" font-size="11.9999">271</text>
                                <text transform="matrix(1 0 0 1 784.2612 1305.4932)" font-family="'Arial-BoldMT'" font-size="11.9999">272</text>
                                <text transform="matrix(1 0 0 1 844.2188 1305.5664)" font-family="'Arial-BoldMT'" font-size="11.9999">273</text>
                                <text transform="matrix(1 0 0 1 904.0986 1305.5664)" font-family="'Arial-BoldMT'" font-size="11.9999">274</text>
                                <text transform="matrix(1 0 0 1 964.1411 1305.5664)" font-family="'Arial-BoldMT'" font-size="11.9999">275</text>
                                <text transform="matrix(1 0 0 1 1024.2065 1305.5664)" font-family="'Arial-BoldMT'" font-size="11.9999">276</text>
                                <text transform="matrix(1 0 0 1 1083.5493 1305.5664)" font-family="'Arial-BoldMT'" font-size="11.9999">277</text>
                                <text transform="matrix(1 0 0 1 1144.2607 1305.5664)" font-family="'Arial-BoldMT'" font-size="11.9999">278</text>
                                <text transform="matrix(1 0 0 1 1204.2964 1305.5664)" font-family="'Arial-BoldMT'" font-size="11.9999">279</text>
                                <text transform="matrix(1 0 0 1 1269.6401 1305.5664)" font-family="'Arial-BoldMT'" font-size="11.9999">280</text>
                                <text transform="matrix(1 0 0 1 470.4917 1405.1279)" font-family="'Arial-BoldMT'" font-size="11.9999">265</text>
                                <text transform="matrix(1 0 0 1 561.3364 1405.2373)" font-family="'Arial-BoldMT'" font-size="11.9999">264</text>
                                <text transform="matrix(1 0 0 1 657.6694 1405.2373)" font-family="'Arial-BoldMT'" font-size="11.9999">263</text>
                                <text transform="matrix(1 0 0 1 737.6641 1405.2373)" font-family="'Arial-BoldMT'" font-size="11.9999">262</text>
                                <text transform="matrix(1 0 0 1 805.207 1405.2373)" font-family="'Arial-BoldMT'" font-size="11.9999">261</text>
                                <text transform="matrix(1 0 0 1 870.3247 1405.2373)" font-family="'Arial-BoldMT'" font-size="11.9999">260</text>
                                <text transform="matrix(1 0 0 1 937.5762 1405.2373)" font-family="'Arial-BoldMT'" font-size="11.9999">259</text>
                                <text transform="matrix(1 0 0 1 1005.4336 1405.2373)" font-family="'Arial-BoldMT'" font-size="11.9999">258</text>
                                <text transform="matrix(1 0 0 1 1073.1528 1405.2373)" font-family="'Arial-BoldMT'" font-size="11.9999">257</text>
                                <text transform="matrix(1 0 0 1 1135.9214 1405.2373)" font-family="'Arial-BoldMT'" font-size="11.9999">256</text>
                                <text transform="matrix(0.9847 0.1226 -0.1235 0.9923 472.5825 1462.0752)" font-family="'Arial-BoldMT'" font-size="11.9994">218</text>
                                <text transform="matrix(0.9847 0.1226 -0.1235 0.9923 562.7329 1473.7637)" font-family="'Arial-BoldMT'" font-size="11.9994">219</text>
                                <text transform="matrix(0.9847 0.1226 -0.1235 0.9923 658.0039 1485.3428)" font-family="'Arial-BoldMT'" font-size="11.9994">220</text>
                                <text transform="matrix(0.9847 0.1226 -0.1235 0.9923 737.7119 1495.5361)" font-family="'Arial-BoldMT'" font-size="11.9994">221</text>
                                <text transform="matrix(0.9847 0.1226 -0.1235 0.9923 804.7373 1503.876)" font-family="'Arial-BoldMT'" font-size="11.9994">222</text>
                                <text transform="matrix(0.9847 0.1226 -0.1235 0.9923 869.3574 1511.916)" font-family="'Arial-BoldMT'" font-size="11.9994">223</text>
                                <text transform="matrix(0.9847 0.1226 -0.1235 0.9923 936.1987 1520.1777)" font-family="'Arial-BoldMT'" font-size="11.9994">224</text>
                                <text transform="matrix(0.9847 0.1226 -0.1235 0.9923 1003.4326 1528.5977)" font-family="'Arial-BoldMT'" font-size="11.9994">225</text>
                                <text transform="matrix(0.9847 0.1226 -0.1235 0.9923 1070.6323 1536.96)" font-family="'Arial-BoldMT'" font-size="11.9994">226</text>
                                <text transform="matrix(0.9847 0.1226 -0.1235 0.9923 1132.9214 1544.71)" font-family="'Arial-BoldMT'" font-size="11.9994">227</text>
                                <text transform="matrix(1 0 0 1 1229.2998 1557.0908)" font-family="'Arial-BoldMT'" font-size="11.9999">228</text>
                                <text transform="matrix(1 0 0 1 1286.8096 1566.3896)" font-family="'Arial-BoldMT'" font-size="11.9999">229</text>
                                <text transform="matrix(1 0 0 1 1348.6367 1577.1865)" font-family="'Arial-BoldMT'" font-size="11.9999">230</text>
                                <text transform="matrix(1 0 0 1 1410.1006 1586.9365)" font-family="'Arial-BoldMT'" font-size="11.9999">231</text>
                                <text transform="matrix(1 0 0 1 1460.9209 1593.8398)" font-family="'Arial-BoldMT'" font-size="11.9999">232</text>
                                <text transform="matrix(1 0 0 1 1518.4297 1604.9639)" font-family="'Arial-BoldMT'" font-size="11.9999">233</text>
                                <text transform="matrix(1 0 0 1 1594.5801 1614.0127)" font-family="'Arial-BoldMT'" font-size="11.9999">234</text>
                                <text transform="matrix(1 0 0 1 1655.999 1623.6855)" font-family="'Arial-BoldMT'" font-size="11.9826">235</text>
                                <text transform="matrix(1 0 0 1 1718.7393 1633.1777)" font-family="'Arial-BoldMT'" font-size="11.9999">236</text>
                                <text transform="matrix(1 0 0 1 1780.6074 1643.7832)" font-family="'Arial-BoldMT'" font-size="11.9999">237</text>
                                <text transform="matrix(1 0 0 1 1842.0703 1653.5332)" font-family="'Arial-BoldMT'" font-size="11.9999">238</text>
                                <text transform="matrix(1 0 0 1 1894.3311 1660.4365)" font-family="'Arial-BoldMT'" font-size="11.9999">239</text>
                                <text transform="matrix(1 0 0 1 1958.3203 1669.7344)" font-family="'Arial-BoldMT'" font-size="11.9999">240</text>
                                <text transform="matrix(1 0 0 1 2033.0303 1680.6104)" font-family="'Arial-BoldMT'" font-size="11.9999">241</text>
                                <text transform="matrix(1 0 0 1 2098.9023 1690.2822)" font-family="'Arial-BoldMT'" font-size="11.9826">242</text>
                                <text transform="matrix(1 0 0 1 1229.2998 1466.002)" font-family="'Arial-BoldMT'" font-size="11.9999">255</text>
                                <text transform="matrix(1 0 0 1 1286.8096 1475.3008)" font-family="'Arial-BoldMT'" font-size="11.9999">254</text>
                                <text transform="matrix(1 0 0 1 1348.6367 1486.0977)" font-family="'Arial-BoldMT'" font-size="11.9999">253</text>
                                <text transform="matrix(1 0 0 1 1410.1006 1495.8477)" font-family="'Arial-BoldMT'" font-size="11.9999">252</text>
                                <text transform="matrix(1 0 0 1 1460.9209 1502.751)" font-family="'Arial-BoldMT'" font-size="11.9999">251</text>
                                <text transform="matrix(1 0 0 1 1518.4297 1512.0488)" font-family="'Arial-BoldMT'" font-size="11.9999">250</text>
                                <text transform="matrix(1 0 0 1 1594.5801 1522.9238)" font-family="'Arial-BoldMT'" font-size="11.9999">249</text>
                                <text transform="matrix(1 0 0 1 1655.999 1532.5967)" font-family="'Arial-BoldMT'" font-size="11.9826">248</text>
                                <text transform="matrix(1 0 0 1 1718.7393 1542.0889)" font-family="'Arial-BoldMT'" font-size="11.9999">247</text>
                                <text transform="matrix(1 0 0 1 1780.6074 1552.6943)" font-family="'Arial-BoldMT'" font-size="11.9999">246</text>
                                <text transform="matrix(1 0 0 1 1842.0703 1562.4443)" font-family="'Arial-BoldMT'" font-size="11.9999">245</text>
                                <text transform="matrix(1 0 0 1 1894.3311 1569.3477)" font-family="'Arial-BoldMT'" font-size="11.9999">244</text>
                                <text transform="matrix(1 0 0 1 1958.3203 1578.6465)" font-family="'Arial-BoldMT'" font-size="11.9999">243</text>
                                <text transform="matrix(1 0 0 1 1383.9946 1368.791)" font-family="'Arial-BoldMT'" font-size="11.9999">281</text>
                                <text transform="matrix(1 0 0 1 1404.0947 1321.5107)" font-family="'Arial-BoldMT'" font-size="11.9999">282</text>
                                <text transform="matrix(1 0 0 1 1431.8145 1273.7988)" font-family="'Arial-BoldMT'" font-size="11.9999">283</text>
                                <text transform="matrix(1 0 0 1 1451.4043 1225.165)" font-family="'Arial-BoldMT'" font-size="11.9999">284</text>
                                <text transform="matrix(1 0 0 1 1479.1543 1176.416)" font-family="'Arial-BoldMT'" font-size="11.9999">285</text>
                                <text transform="matrix(1 0 0 1 1502.4453 1126.166)" font-family="'Arial-BoldMT'" font-size="11.9999">286</text>
                                <text transform="matrix(1 0 0 1 1528.5537 1076.9355)" font-family="'Arial-BoldMT'" font-size="11.9999">287</text>
                                <text transform="matrix(1 0 0 1 1548.6533 1029.6553)" font-family="'Arial-BoldMT'" font-size="11.9999">288</text>
                                <text transform="matrix(1 0 0 1 1568.4004 972.4521)" font-family="'Arial-BoldMT'" font-size="11.9999">289</text>
                                <text transform="matrix(1 0 0 1 1595.9629 933.3101)" font-family="'Arial-BoldMT'" font-size="11.9999">290</text>
                                <text transform="matrix(1 0 0 1 1623.7129 884.5605)" font-family="'Arial-BoldMT'" font-size="11.9999">291</text>
                                <text transform="matrix(1 0 0 1 1647.0039 834.3105)" font-family="'Arial-BoldMT'" font-size="11.9999">292</text>
                                <text transform="matrix(1 0 0 1 1507.7754 1383.791)" font-family="'Arial-BoldMT'" font-size="11.9999">304</text>
                                <text transform="matrix(1 0 0 1 1527.875 1336.5107)" font-family="'Arial-BoldMT'" font-size="11.9999">303</text>
                                <text transform="matrix(1 0 0 1 1555.5947 1288.7988)" font-family="'Arial-BoldMT'" font-size="11.9999">302</text>
                                <text transform="matrix(1 0 0 1 1575.1846 1240.165)" font-family="'Arial-BoldMT'" font-size="11.9999">301</text>
                                <text transform="matrix(1 0 0 1 1602.9336 1191.416)" font-family="'Arial-BoldMT'" font-size="11.9999">300</text>
                                <text transform="matrix(1 0 0 1 1626.2256 1141.166)" font-family="'Arial-BoldMT'" font-size="11.9999">299</text>
                                <text transform="matrix(1 0 0 1 1652.334 1091.9355)" font-family="'Arial-BoldMT'" font-size="11.9999">298</text>
                                <text transform="matrix(1 0 0 1 1672.4336 1044.6553)" font-family="'Arial-BoldMT'" font-size="11.9999">297</text>
                                <text transform="matrix(1 0 0 1 1700.1543 996.9434)" font-family="'Arial-BoldMT'" font-size="11.9999">296</text>
                                <text transform="matrix(1 0 0 1 1719.7441 948.3105)" font-family="'Arial-BoldMT'" font-size="11.9999">295</text>
                                <text transform="matrix(1 0 0 1 1747.4922 899.561)" font-family="'Arial-BoldMT'" font-size="11.9999">294</text>
                                <text transform="matrix(1 0 0 1 1771.0547 849.4131)" font-family="'Arial-BoldMT'" font-size="11.9999">293</text>
                                <text transform="matrix(1 0 0 1 1632.4336 1395.0381)" font-family="'Arial-BoldMT'" font-size="11.9999">305</text>
                                <text transform="matrix(1 0 0 1 1672.2383 1333.6523)" font-family="'Arial-BoldMT'" font-size="11.9999">306</text>
                                <text transform="matrix(1 0 0 1 1702.5859 1403.252)" font-family="'Arial-BoldMT'" font-size="11.9999">307</text>
                                <text transform="matrix(1 0 0 1 1763.1914 1411.0518)" font-family="'Arial-BoldMT'" font-size="11.9999">308</text>
                                <text transform="matrix(1 0 0 1 1188.4429 593.8438)" font-family="'Arial-BoldMT'" font-size="11.9999">452</text>
                                <text transform="matrix(1 0 0 1 1241.6528 593.8438)" font-family="'Arial-BoldMT'" font-size="11.9999">453</text>
                                <text transform="matrix(1 0 0 1 1289.7808 593.8438)" font-family="'Arial-BoldMT'" font-size="11.9999">454</text>
                                <text transform="matrix(1 0 0 1 1339.9741 593.8438)" font-family="'Arial-BoldMT'" font-size="11.9999">455</text>
                                <text transform="matrix(1 0 0 1 1391.8511 593.8438)" font-family="'Arial-BoldMT'" font-size="11.9999">456</text>
                                <text transform="matrix(1 0 0 1 1437.3428 593.8438)" font-family="'Arial-BoldMT'" font-size="11.9999">457</text>
                                <text transform="matrix(1 0 0 1 1487.7363 593.8433)" font-family="'Arial-BoldMT'" font-size="11.9999">458</text>
                                <text transform="matrix(1 0 0 1 1540.6152 593.8438)" font-family="'Arial-BoldMT'" font-size="11.9999">459</text>
                                <text transform="matrix(1 0 0 1 1587.4531 593.8433)" font-family="'Arial-BoldMT'" font-size="11.9999">460</text>
                                <text transform="matrix(1 0 0 1 1637.1445 593.8433)" font-family="'Arial-BoldMT'" font-size="11.9999">461</text>
                                <text transform="matrix(1 0 0 1 1726.7617 617.7466)" font-family="'Arial-BoldMT'" font-size="11.9999">467</text>
                                <text transform="matrix(1 0 0 1 1751.584 565.2461)" font-family="'Arial-BoldMT'" font-size="11.9999">466</text>
                                <text transform="matrix(1 0 0 1 1778.542 514.918)" font-family="'Arial-BoldMT'" font-size="11.9999">465</text>
                                <text transform="matrix(1 0 0 1 1803.9219 463.2461)" font-family="'Arial-BoldMT'" font-size="11.9999">464</text>
                                <text transform="matrix(1 0 0 1 1829.96 414.6758)" font-family="'Arial-BoldMT'" font-size="11.9999">463</text>
                                <text transform="matrix(1 0 0 1 1855.75 368.668)" font-family="'Arial-BoldMT'" font-size="11.9999">462</text>
                                <text transform="matrix(1 0 0 1 1816.0117 682.9966)" font-family="'Arial-BoldMT'" font-size="11.9999">469</text>
                                <text transform="matrix(1 0 0 1 1840.834 630.4961)" font-family="'Arial-BoldMT'" font-size="11.9999">470</text>
                                <text transform="matrix(1 0 0 1 1867.792 580.168)" font-family="'Arial-BoldMT'" font-size="11.9999">471</text>
                                <text transform="matrix(1 0 0 1 1893.1719 528.4961)" font-family="'Arial-BoldMT'" font-size="11.9999">472</text>
                                <text transform="matrix(1 0 0 1 1919.21 479.9263)" font-family="'Arial-BoldMT'" font-size="11.9999">473</text>
                                <text transform="matrix(1 0 0 1 1945 433.918)" font-family="'Arial-BoldMT'" font-size="11.9999">474</text>
                                <g>

                                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
		M1069.14,842.394l-12.54,221.76h66.66v-23.28l155.7-2.22v-66.72l63.99-0.194c22.211-2.081,40.185-12.651,52.961-33.631
		l67.499-124.837l2.33-14.679h116.34l13.74-26.7l-254.22-0.24c-36.269-0.581-55.96,21.159-71.233,48.846
		c-13.146,13.282-23.187,19.462-42.587,21.714c-1.509,0.175-3.104,0.011-4.793,0.017l-48.127,0.164H1069.14z"/>

                                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#2CB0CF" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
		M1134.063,926.767c1.875-33.162,37.06-30.704,54.558-43.318c15.205-10.961,32.189,3.679,43.007,15.942
		c39.602,44.896-31.449,54.132-43.253,50.813c-18.471-5.194-33.365,8.825-49.628-7.805
		C1133.154,936.682,1133.659,933.907,1134.063,926.767z"/>
                                </g>
                                <text transform="matrix(1 0 0 1 1725.0059 348.3306)" font-family="'Arial-BoldMT'" font-size="6.9999">695.1m2</text>
                                <text transform="matrix(1 0 0 1 510.2788 538.3096)" font-family="'Arial-BoldMT'" font-size="6.9999">602.739m2</text>
                                <text transform="matrix(1 0 0 1 556.3218 538.3096)" font-family="'Arial-BoldMT'" font-size="6.9999">575.975m2</text>
                                <text transform="matrix(1 0 0 1 600.7607 538.3096)" font-family="'Arial-BoldMT'" font-size="6.9999">572.983m2</text>
                                <text transform="matrix(1 0 0 1 644.7622 538.3096)" font-family="'Arial-BoldMT'" font-size="6.9999">569.991m2</text>
                                <text transform="matrix(1 0 0 1 688.9819 538.3096)" font-family="'Arial-BoldMT'" font-size="6.9999">566.999m2</text>
                                <text transform="matrix(1 0 0 1 733.2617 538.3096)" font-family="'Arial-BoldMT'" font-size="6.9999">564.008m2</text>
                                <text transform="matrix(1 0 0 1 777.5117 538.3096)" font-family="'Arial-BoldMT'" font-size="6.9999">561.016m2</text>
                                <text transform="matrix(1 0 0 1 821.7617 538.3096)" font-family="'Arial-BoldMT'" font-size="6.9999">558.024m2</text>
                                <text transform="matrix(1 0 0 1 865.9819 538.3096)" font-family="'Arial-BoldMT'" font-size="6.9999">555.032m2</text>
                                <text transform="matrix(1 0 0 1 910.2319 538.3096)" font-family="'Arial-BoldMT'" font-size="6.9999">552.040m2</text>
                                <text transform="matrix(1 0 0 1 954.4814 538.3096)" font-family="'Arial-BoldMT'" font-size="6.9999">549.048m2</text>
                                <text transform="matrix(1 0 0 1 998.7612 538.3096)" font-family="'Arial-BoldMT'" font-size="6.9999">547.548m2</text>
                                <text transform="matrix(1 0 0 1 1073.1528 538.3096)" font-family="'Arial-BoldMT'" font-size="6.9999">756.443m2</text>
                                <text transform="matrix(1 0 0 1 1094.9619 709.2485)" font-family="'Arial-BoldMT'" font-size="6.9999">574.467m2</text>
                                <text transform="matrix(1 0 0 1 1093.6284 806.7764)" font-family="'Arial-BoldMT'" font-size="6.9999">625.533m2</text>
                                <text transform="matrix(1 0 0 1 1204.2964 693.9229)" font-family="'Arial-BoldMT'" font-size="6.9999">560.128m2</text>
                                <text transform="matrix(1 0 0 1 1204.2964 752.3633)" font-family="'Arial-BoldMT'" font-size="6.9999">540.000m2</text>
                                <text transform="matrix(1 0 0 1 1201.4097 806.7764)" font-family="'Arial-BoldMT'" font-size="6.9999">500.265m2</text>
                                <text transform="matrix(1 0 0 1 1290.7793 748.3838)" font-family="'Arial-BoldMT'" font-size="6.9999">670.94m2</text>
                                <text transform="matrix(1 0 0 1 1184.8794 526.9839)" font-family="'Arial-BoldMT'" font-size="6.9999">639.688m2</text>
                                <text transform="matrix(1 0 0 1 1234.3608 527.5098)" font-family="'Arial-BoldMT'" font-size="6.9999">647.735m2</text>
                                <text transform="matrix(1 0 0 1 1280.8794 527.5098)" font-family="'Arial-BoldMT'" font-size="6.9999">647.735m2</text>
                                <text transform="matrix(1 0 0 1 1331.8794 527.5098)" font-family="'Arial-BoldMT'" font-size="6.9999">647.735m2</text>
                                <text transform="matrix(1 0 0 1 1383.1616 527.5098)" font-family="'Arial-BoldMT'" font-size="6.9999">647.735m2</text>
                                <text transform="matrix(1 0 0 1 1429.6797 527.5098)" font-family="'Arial-BoldMT'" font-size="6.9999">647.735m2</text>
                                <text transform="matrix(1 0 0 1 1480.6797 527.5098)" font-family="'Arial-BoldMT'" font-size="6.9999">647.735m2</text>
                                <text transform="matrix(1 0 0 1 1530.4805 527.5098)" font-family="'Arial-BoldMT'" font-size="6.9999">647.735m2</text>
                                <text transform="matrix(1 0 0 1 1581.4805 527.5098)" font-family="'Arial-BoldMT'" font-size="6.9999">647.735m2</text>
                                <text transform="matrix(1 0 0 1 1628.8809 527.5098)" font-family="'Arial-BoldMT'" font-size="6.9999">647.567m2</text>
                                <text transform="matrix(1 0 0 1 1358.9214 748.3101)" font-family="'Arial-BoldMT'" font-size="6.9999">670.538m2</text>
                                <text transform="matrix(1 0 0 1 1425.96 748.3101)" font-family="'Arial-BoldMT'" font-size="6.9999">670.538m2</text>
                                <text transform="matrix(1 0 0 1 1491.4805 748.3101)" font-family="'Arial-BoldMT'" font-size="6.9999">670.538m2</text>
                                <text transform="matrix(1 0 0 1 1561.0801 748.3101)" font-family="'Arial-BoldMT'" font-size="6.9999">832.398m2</text>
                                <text transform="matrix(1 0 0 1 1487.7363 827.8857)" font-family="'Arial-BoldMT'" font-size="6.9999">537.036m2</text>
                                <text transform="matrix(1 0 0 1 1462.1406 879.5908)" font-family="'Arial-BoldMT'" font-size="6.9999">540.306m2</text>
                                <text transform="matrix(1 0 0 1 1448.0791 930.293)" font-family="'Arial-BoldMT'" font-size="6.9999">567.026m2</text>
                                <text transform="matrix(1 0 0 1 1431.8145 977.8335)" font-family="'Arial-BoldMT'" font-size="6.9999">567.02m2</text>
                                <text transform="matrix(1 0 0 1 1404.0947 1016.8105)" font-family="'Arial-BoldMT'" font-size="6.9999">430.370m2</text>
                                <text transform="matrix(1 0 0 1 1348.0093 1135.8105)" font-family="'Arial-BoldMT'" font-size="6.9999">648.990m2</text>
                                <text transform="matrix(1 0 0 1 1286.6484 1093.875)" font-family="'Arial-BoldMT'" font-size="6.9999">621.346m2</text>
                                <text transform="matrix(1 0 0 1 1233.9087 1093.875)" font-family="'Arial-BoldMT'" font-size="6.9999">692.232m2</text>
                                <text transform="matrix(1 0 0 1 1181.1089 1093.875)" font-family="'Arial-BoldMT'" font-size="6.9999">621.929m2</text>
                                <text transform="matrix(1 0 0 1 1131.0986 1093.875)" font-family="'Arial-BoldMT'" font-size="6.9999">622.518m2</text>
                                <text transform="matrix(1 0 0 1 1068.7109 1093.875)" font-family="'Arial-BoldMT'" font-size="6.9999">709.441m2</text>
                                <text transform="matrix(1 0 0 1 426.9961 1251.4355)" font-family="'Arial-BoldMT'" font-size="6.9999">508.232m2</text>
                                <text transform="matrix(1 0 0 1 479.0718 1251.4355)" font-family="'Arial-BoldMT'" font-size="6.9999">513.913m2</text>
                                <text transform="matrix(1 0 0 1 536.3716 1251.4355)" font-family="'Arial-BoldMT'" font-size="6.9999">568.796m2</text>
                                <text transform="matrix(1 0 0 1 596.3716 1251.4355)" font-family="'Arial-BoldMT'" font-size="6.9999">567.383m2</text>
                                <text transform="matrix(1 0 0 1 656.4019 1251.4355)" font-family="'Arial-BoldMT'" font-size="6.9999">565.970m2</text>
                                <text transform="matrix(1 0 0 1 460.7832 1373.3906)" font-family="'Arial-BoldMT'" font-size="6.9999">537.333m2</text>
                                <text transform="matrix(1 0 0 1 461.7144 1436.5107)" font-family="'Arial-BoldMT'" font-size="6.9999">678.776m2</text>
                                <text transform="matrix(1 0 0 1 550.6636 1373.3906)" font-family="'Arial-BoldMT'" font-size="6.9999">593.016m2</text>
                                <text transform="matrix(1 0 0 1 647.3838 1373.3906)" font-family="'Arial-BoldMT'" font-size="6.9999">659.733m2</text>
                                <text transform="matrix(1 0 0 1 551.7144 1441.3105)" font-family="'Arial-BoldMT'" font-size="6.9999">625.025m2</text>
                                <text transform="matrix(1 0 0 1 647.3394 1446.1104)" font-family="'Arial-BoldMT'" font-size="6.9999">684.621m2</text>
                                <text transform="matrix(1 0 0 1 716.4321 1251.4355)" font-family="'Arial-BoldMT'" font-size="6.9999">564.557m2</text>
                                <text transform="matrix(1 0 0 1 776.4321 1251.4355)" font-family="'Arial-BoldMT'" font-size="6.9999">563.144m2</text>
                                <text transform="matrix(1 0 0 1 836.4321 1251.4355)" font-family="'Arial-BoldMT'" font-size="6.9999">561.833m2</text>
                                <text transform="matrix(1 0 0 1 896.4316 1251.4355)" font-family="'Arial-BoldMT'" font-size="6.9999">560.214m2</text>
                                <text transform="matrix(1 0 0 1 728.9839 1373.3906)" font-family="'Arial-BoldMT'" font-size="6.9999">512.069m2</text>
                                <text transform="matrix(1 0 0 1 795.3438 1373.3906)" font-family="'Arial-BoldMT'" font-size="6.9999">546.107m2</text>
                                <text transform="matrix(1 0 0 1 854.2637 1373.3906)" font-family="'Arial-BoldMT'" font-size="6.9999">580.144m2</text>
                                <text transform="matrix(1 0 0 1 729.4634 1452.1104)" font-family="'Arial-BoldMT'" font-size="6.9999">525.456m2</text>
                                <text transform="matrix(1 0 0 1 799.6636 1462.9336)" font-family="'Arial-BoldMT'" font-size="6.9999">555.860m2</text>
                                <text transform="matrix(1 0 0 1 865.209 1472.1582)" font-family="'Arial-BoldMT'" font-size="6.9999">586.265m2</text>
                                <text transform="matrix(1 0 0 1 932.8643 1477.9111)" font-family="'Arial-BoldMT'" font-size="6.9999">606.213m2</text>
                                <text transform="matrix(1 0 0 1 923.2642 1373.3906)" font-family="'Arial-BoldMT'" font-size="6.9999">598.944m2</text>
                                <text transform="matrix(1 0 0 1 989.2637 1373.3906)" font-family="'Arial-BoldMT'" font-size="6.9999">599.272m2</text>
                                <text transform="matrix(1 0 0 1 1056.4639 1373.3906)" font-family="'Arial-BoldMT'" font-size="6.9999">599.600m2</text>
                                <text transform="matrix(1 0 0 1 1121.8638 1373.3906)" font-family="'Arial-BoldMT'" font-size="6.9999">597.906m2</text>
                                <text transform="matrix(1 0 0 1 996.7822 1487.585)" font-family="'Arial-BoldMT'" font-size="6.9999">606.213m2</text>
                                <text transform="matrix(1 0 0 1 1063.9819 1495.3857)" font-family="'Arial-BoldMT'" font-size="6.9999">606.213m2</text>
                                <text transform="matrix(1 0 0 1 1129.9819 1503.7852)" font-family="'Arial-BoldMT'" font-size="6.9999">603.513m2</text>
                                <text transform="matrix(1 0 0 1 1224.4731 1418.5859)" font-family="'Arial-BoldMT'" font-size="6.9999">533.026m2</text>
                                <text transform="matrix(1 0 0 1 1285.374 1428.7861)" font-family="'Arial-BoldMT'" font-size="6.9999">514.295m2</text>
                                <text transform="matrix(1 0 0 1 1339.9741 1437.1855)" font-family="'Arial-BoldMT'" font-size="6.9999">525.000m2</text>
                                <text transform="matrix(1 0 0 1 1400.5742 1445.5859)" font-family="'Arial-BoldMT'" font-size="6.9999">525.000m2</text>
                                <text transform="matrix(1 0 0 1 1456.374 1452.7861)" font-family="'Arial-BoldMT'" font-size="6.9999">525.000m2</text>
                                <text transform="matrix(1 0 0 1 1513.374 1459.9854)" font-family="'Arial-BoldMT'" font-size="6.9999">525.000m2</text>
                                <text transform="matrix(1 0 0 1 1590.7744 1469.8848)" font-family="'Arial-BoldMT'" font-size="6.9999">540.000m2</text>
                                <text transform="matrix(1 0 0 1 1648.6729 1479.1846)" font-family="'Arial-BoldMT'" font-size="6.9999">540.000m2</text>
                                <text transform="matrix(1 0 0 1 1711.0732 1488.7852)" font-family="'Arial-BoldMT'" font-size="6.9999">540.000m2</text>
                                <text transform="matrix(1 0 0 1 1768.375 1496.2852)" font-family="'Arial-BoldMT'" font-size="6.9999">540.000m2</text>
                                <text transform="matrix(1 0 0 1 1826.2734 1505.585)" font-family="'Arial-BoldMT'" font-size="6.9999">540.000m2</text>
                                <text transform="matrix(1 0 0 1 1888.6738 1515.1846)" font-family="'Arial-BoldMT'" font-size="6.9999">540.000m2</text>
                                <text transform="matrix(1 0 0 1 1949.2734 1526.8848)" font-family="'Arial-BoldMT'" font-size="6.9999">666.870m2</text>
                                <text transform="matrix(1 0 0 1 1222.0601 1516.0098)" font-family="'Arial-BoldMT'" font-size="6.9999">553.179m2</text>
                                <text transform="matrix(1 0 0 1 1287.2588 1524.4844)" font-family="'Arial-BoldMT'" font-size="6.9999">495.450m2</text>
                                <text transform="matrix(1 0 0 1 1339.9741 1533.1855)" font-family="'Arial-BoldMT'" font-size="6.9999">525.000m2</text>
                                <text transform="matrix(1 0 0 1 1400.5742 1541.5859)" font-family="'Arial-BoldMT'" font-size="6.9999">525.000m2</text>
                                <text transform="matrix(1 0 0 1 1456.374 1548.7861)" font-family="'Arial-BoldMT'" font-size="6.9999">525.000m2</text>
                                <text transform="matrix(1 0 0 1 1513.374 1555.9863)" font-family="'Arial-BoldMT'" font-size="6.9999">525.000m2</text>
                                <text transform="matrix(1 0 0 1 1590.7744 1566.7842)" font-family="'Arial-BoldMT'" font-size="6.9999">540.000m2</text>
                                <text transform="matrix(1 0 0 1 1648.6729 1576.084)" font-family="'Arial-BoldMT'" font-size="6.9999">540.000m2</text>
                                <text transform="matrix(1 0 0 1 1711.0732 1585.6836)" font-family="'Arial-BoldMT'" font-size="6.9999">540.000m2</text>
                                <text transform="matrix(1 0 0 1 1768.375 1593.1846)" font-family="'Arial-BoldMT'" font-size="6.9999">540.000m2</text>
                                <text transform="matrix(1 0 0 1 1826.2734 1602.4844)" font-family="'Arial-BoldMT'" font-size="6.9999">540.000m2</text>
                                <text transform="matrix(1 0 0 1 1888.6738 1612.084)" font-family="'Arial-BoldMT'" font-size="6.9999">540.000m2</text>
                                <text transform="matrix(1 0 0 1 1949.2734 1623.7842)" font-family="'Arial-BoldMT'" font-size="6.9999">734.559m2</text>
                                <text transform="matrix(1 0 0 1 2030.8184 1636.9844)" font-family="'Arial-BoldMT'" font-size="6.9999">888.571m2</text>
                                <text transform="matrix(1 0 0 1 2093.5781 1653.1846)" font-family="'Arial-BoldMT'" font-size="6.9999">621.199m2</text>
                                <text transform="matrix(1 0 0 1 1662.7715 1304.2842)" font-family="'Arial-BoldMT'" font-size="6.9999">518.356m2</text>
                                <text transform="matrix(1 0 0 1 1624.6699 1366.6846)" font-family="'Arial-BoldMT'" font-size="6.9999">526.000m2</text>
                                <text transform="matrix(1 0 0 1 1717.0703 1349.8105)" font-family="'Arial-BoldMT'" font-size="6.9999">529.241m2</text>
                                <text transform="matrix(1 0 0 1 1761.4707 1370.8848)" font-family="'Arial-BoldMT'" font-size="6.9999">540.797m2</text>
                                <text transform="matrix(1 0 0 1 1639.959 803.8096)" font-family="'Arial-BoldMT'" font-size="6.9999">601.176m2</text>
                                <text transform="matrix(1 0 0 1 1626.1582 859.6094)" font-family="'Arial-BoldMT'" font-size="6.9999">565.044m2</text>
                                <text transform="matrix(1 0 0 1 1591.3574 904.6094)" font-family="'Arial-BoldMT'" font-size="6.9999">549.779m2</text>
                                <text transform="matrix(1 0 0 1 1560.7578 952.0098)" font-family="'Arial-BoldMT'" font-size="6.9999">551.113m2</text>
                                <text transform="matrix(1 0 0 1 1538.5586 1004.21)" font-family="'Arial-BoldMT'" font-size="6.9999">552.446m2</text>
                                <text transform="matrix(1 0 0 1 1666.959 1016.8105)" font-family="'Arial-BoldMT'" font-size="6.9999">540.099m2</text>
                                <text transform="matrix(1 0 0 1 1681.0352 972.4521)" font-family="'Arial-BoldMT'" font-size="6.9999">541.433m2</text>
                                <text transform="matrix(1 0 0 1 1699.959 918.4102)" font-family="'Arial-BoldMT'" font-size="6.9999">542.766m2</text>
                                <text transform="matrix(1 0 0 1 1725.1582 869.8096)" font-family="'Arial-BoldMT'" font-size="6.9999">560.608m2</text>
                                <text transform="matrix(1 0 0 1 1746.7578 821.8101)" font-family="'Arial-BoldMT'" font-size="6.9999">599.565m2</text>
                                <text transform="matrix(1 0 0 1 1519.3584 1051.6113)" font-family="'Arial-BoldMT'" font-size="6.9999">587.385m2</text>
                                <text transform="matrix(1 0 0 1 1635.1582 1072.6104)" font-family="'Arial-BoldMT'" font-size="6.9999">571.375m2</text>
                                <text transform="matrix(1 0 0 1 1487.5586 1104.3135)" font-family="'Arial-BoldMT'" font-size="6.9999">521.508m2</text>
                                <text transform="matrix(1 0 0 1 1605.1582 1117.0107)" font-family="'Arial-BoldMT'" font-size="6.9999">504.822m2</text>
                                <text transform="matrix(1 0 0 1 1461.1582 1148.2109)" font-family="'Arial-BoldMT'" font-size="6.9999">556.447m2</text>
                                <text transform="matrix(1 0 0 1 1574.5586 1162.6113)" font-family="'Arial-BoldMT'" font-size="6.9999">536.098m2</text>
                                <text transform="matrix(1 0 0 1 1434.1582 1202.2109)" font-family="'Arial-BoldMT'" font-size="6.9999">557.781m2</text>
                                <text transform="matrix(1 0 0 1 1405.3584 1247.8105)" font-family="'Arial-BoldMT'" font-size="6.9999">559.115m2</text>
                                <text transform="matrix(1 0 0 1 1380.1582 1295.8105)" font-family="'Arial-BoldMT'" font-size="6.9999">560.448m2</text>
                                <text transform="matrix(1 0 0 1 1354.958 1347.4111)" font-family="'Arial-BoldMT'" font-size="6.9999">557.714m2</text>
                                <text transform="matrix(1 0 0 1 1557.7578 1211.8105)" font-family="'Arial-BoldMT'" font-size="6.9999">534.764m2</text>
                                <text transform="matrix(1 0 0 1 1522.959 1263.4111)" font-family="'Arial-BoldMT'" font-size="6.9999">533.431m2</text>
                                <text transform="matrix(1 0 0 1 1500.1582 1313.8115)" font-family="'Arial-BoldMT'" font-size="6.9999">532.097m2</text>
                                <text transform="matrix(1 0 0 1 1482.1582 1361.2109)" font-family="'Arial-BoldMT'" font-size="6.9999">529.923m2</text>
                                <text transform="matrix(1 0 0 1 1261.8247 1251.4355)" font-family="'Arial-BoldMT'" font-size="6.9999">651.756m2</text>
                                <text transform="matrix(1 0 0 1 1196.4917 1251.4355)" font-family="'Arial-BoldMT'" font-size="6.9999">553.440m2</text>
                                <text transform="matrix(1 0 0 1 1136.4619 1251.4355)" font-family="'Arial-BoldMT'" font-size="6.9999">554.665m2</text>
                                <text transform="matrix(1 0 0 1 1075.7563 1251.4355)" font-family="'Arial-BoldMT'" font-size="6.9999">555.932m2</text>
                                <text transform="matrix(1 0 0 1 1016.4619 1251.4355)" font-family="'Arial-BoldMT'" font-size="6.9999">557.630m2</text>
                                <text transform="matrix(1 0 0 1 956.4321 1251.4355)" font-family="'Arial-BoldMT'" font-size="6.9999">558.904m2</text>
                                <text transform="matrix(1 0 0 1 1887.7266 403.9409)" font-family="'Arial-BoldMT'" font-size="6.9999">526.018m2</text>
                                <text transform="matrix(1 0 0 1 1855.3271 451.9409)" font-family="'Arial-BoldMT'" font-size="6.9999">535.663m2</text>
                                <text transform="matrix(1 0 0 1 1828.9268 501.1406)" font-family="'Arial-BoldMT'" font-size="6.9999">542.563m2</text>
                                <text transform="matrix(1 0 0 1 1795.3262 552.021)" font-family="'Arial-BoldMT'" font-size="6.9999">549.464m2</text>
                                <text transform="matrix(1 0 0 1 1770.127 601.2212)" font-family="'Arial-BoldMT'" font-size="6.9999">556.365m2</text>
                                <text transform="matrix(1 0 0 1 1748.7207 659.1543)" font-family="'Arial-BoldMT'" font-size="6.9999">703.600m2</text>
                                <text transform="matrix(1 0 0 1 1817.4063 720.2612)" font-family="'Arial-BoldMT'" font-size="6.9999">597.002m2</text>
                                <text transform="matrix(1 0 0 1 1864.3574 666.1797)" font-family="'Arial-BoldMT'" font-size="6.9999">569.288m2</text>
                                <text transform="matrix(1 0 0 1 1890.127 622.8213)" font-family="'Arial-BoldMT'" font-size="6.9999">576.178m2</text>
                                <text transform="matrix(1 0 0 1 1912.3262 568.3413)" font-family="'Arial-BoldMT'" font-size="6.9999">582.687m2</text>
                                <text transform="matrix(1 0 0 1 1926.7266 508.3413)" font-family="'Arial-BoldMT'" font-size="6.9999">589.007m2</text>
                                <text transform="matrix(1 0 0 1 1960.3271 463.3413)" font-family="'Arial-BoldMT'" font-size="6.9999">567.041m2</text>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(416)} onClick={() => abrirCotizador(416)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("416")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	564.837,105.365 564.837,237.483 531.537,237.483 531.537,105.946 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(417)} onClick={() => abrirCotizador(417)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("417")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	598.602,104.776 598.602,237.483 565.303,237.483 565.303,105.357 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(418)} onClick={() => abrirCotizador(418)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("418")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	631.892,104.195 631.892,237.483 598.592,237.483 598.592,104.776 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(419)} onClick={() => abrirCotizador(419)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("419")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	665.182,103.614 665.182,237.483 631.882,237.483 631.882,104.195 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(420)} onClick={() => abrirCotizador(420)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("420")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	698.472,103.033 698.472,237.483 665.172,237.483 665.172,103.614 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(421)} onClick={() => abrirCotizador(421)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("421")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	731.761,102.452 731.761,237.483 698.461,237.483 698.461,103.033 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(422)} onClick={() => abrirCotizador(422)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("422")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	765.051,101.871 765.051,237.483 731.751,237.483 731.751,102.452 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(423)} onClick={() => abrirCotizador(423)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("423")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	798.341,101.29 798.341,237.483 765.041,237.483 765.041,101.871 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(424)} onClick={() => abrirCotizador(424)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("424")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	831.63,100.708 831.63,237.483 798.331,237.483 798.331,101.29 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(425)} onClick={() => abrirCotizador(425)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("425")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	864.92,100.127 864.92,237.483 831.62,237.483 831.62,100.708 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(426)} onClick={() => abrirCotizador(426)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("426")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	898.21,99.547 898.21,237.483 864.91,237.483 864.91,100.128 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(427)} onClick={() => abrirCotizador(427)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("427")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	931.5,98.966 931.5,237.483 898.2,237.483 898.2,99.547 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(428)} onClick={() => abrirCotizador(428)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("428")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	964.79,98.385 964.79,237.483 931.49,237.483 931.49,98.966 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(429)} onClick={() => abrirCotizador(429)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("429")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	998.079,97.804 998.079,237.483 964.779,237.483 964.779,98.385 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(430)} onClick={() => abrirCotizador(430)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("430")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1031.369,97.223 1031.369,237.483 998.069,237.483 998.069,97.804 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(431)} onClick={() => abrirCotizador(431)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("431")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1064.658,96.642 1064.658,237.483 1031.359,237.483 1031.359,97.223 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(432)} onClick={() => abrirCotizador(432)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("432")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1097.948,96.061 1097.948,237.483 1064.648,237.483 1064.648,96.642 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(433)} onClick={() => abrirCotizador(433)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("433")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1131.238,95.479 1131.238,237.483 1097.938,237.483 1097.938,96.061 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(434)} onClick={() => abrirCotizador(434)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("434")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1164.527,94.899 1164.527,237.483 1131.228,237.483 1131.228,95.48 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(435)} onClick={() => abrirCotizador(435)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("435")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1197.817,94.317 1197.817,237.483 1164.518,237.483 1164.518,94.899 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(436)} onClick={() => abrirCotizador(436)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("436")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1231.107,93.736 1231.107,237.483 1197.808,237.483 1197.808,94.318 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(437)} onClick={() => abrirCotizador(437)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("437")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1264.397,93.155 1264.397,237.483 1231.097,237.483 1231.097,93.736 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(438)} onClick={() => abrirCotizador(438)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("438")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1297.687,92.574 1297.687,237.483 1264.387,237.483 1264.387,93.155 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(439)} onClick={() => abrirCotizador(439)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("439")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1330.977,91.994 1330.977,237.483 1297.677,237.483 1297.677,92.575 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(440)} onClick={() => abrirCotizador(440)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("440")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1364.266,91.413 1364.266,237.483 1330.966,237.483 1330.966,91.994 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(441)} onClick={() => abrirCotizador(441)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("441")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1397.556,90.832 1397.556,237.483 1364.256,237.483 1364.256,91.413 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(442)} onClick={() => abrirCotizador(442)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("442")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1430.846,90.25 1430.846,237.483 1397.546,237.483 1397.546,90.832 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(443)} onClick={() => abrirCotizador(443)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("443")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1464.135,89.669 1464.135,237.483 1430.836,237.483 1430.836,90.25 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(444)} onClick={() => abrirCotizador(444)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("444")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1497.425,89.088 1497.425,237.483 1464.125,237.483 1464.125,89.67 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(445)} onClick={() => abrirCotizador(445)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("445")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1530.715,88.507 1530.715,237.483 1497.415,237.483 1497.415,89.088 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(446)} onClick={() => abrirCotizador(446)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("446")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1564.004,87.927 1564.004,237.483 1530.705,237.483 1530.705,88.508 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(447)} onClick={() => abrirCotizador(447)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("447")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1597.294,87.346 1597.294,237.483 1563.994,237.483 1563.994,87.927 "/>
                                </a>
                                {/*  */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(450)} onClick={() => abrirCotizador(450)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("450")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1697.156,85.603 1697.156,237.483 1663.855,237.483 1663.855,86.184 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(449)} onClick={() => abrirCotizador(449)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("449")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1663.873,86.184 1663.873,237.483 1630.574,237.483 1630.574,86.765 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(448)} onClick={() => abrirCotizador(448)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("448")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1630.584,86.764 1630.584,237.483 1597.284,237.483 1597.284,87.346 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(451)} onClick={() => abrirCotizador(451)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("451")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1697.156,85.603 1697.156,237.483 1750.441,237.483 1750.441,84.672 "/>
                                </a>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(415)} onClick={() => abrirCotizador(415)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("415")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	494.905,106.5 498.501,237.483 531.537,237.483 531.537,105.946 494.988,106.584 "/>
                                </a>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(343)} onClick={() => abrirCotizador(343)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("343")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M547.368,463.062h24.166v-100.1h-33.984v90.281C537.549,458.644,541.967,463.062,547.368,463.062z"/>
                                </a>
                                {/* 413 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(413)} onClick={() => abrirCotizador(413)} >
                                        <rect x="571.533" y="262.806" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("413")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.087" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(412)} onClick={() => abrirCotizador(412)} >
                                        <rect x="604.833" y="262.806" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("412")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.086" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(411)} onClick={() => abrirCotizador(411)} >
                                        <rect x="638.134" y="262.807" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("411")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.086" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(410)} onClick={() => abrirCotizador(410)} >
                                        <rect x="671.435" y="262.807" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("410")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.085" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(409)} onClick={() => abrirCotizador(409)} >
                                        <rect x="704.735" y="262.808" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("409")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.085" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(408)} onClick={() => abrirCotizador(408)} >
                                        <rect x="738.035" y="262.808" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("408")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.084" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(407)} onClick={() => abrirCotizador(407)} >
                                        <rect x="771.335" y="262.809" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("407")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.084" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(406)} onClick={() => abrirCotizador(406)} >
                                        <rect x="804.636" y="262.809" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("406")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.083" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(405)} onClick={() => abrirCotizador(405)} >
                                        <rect x="837.936" y="262.81" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("405")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.083" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(404)} onClick={() => abrirCotizador(404)} >
                                        <rect x="871.236" y="262.81" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("404")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.083" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(403)} onClick={() => abrirCotizador(403)} >
                                        <rect x="904.537" y="262.811" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("403")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.082" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(402)} onClick={() => abrirCotizador(402)} >
                                        <rect x="937.837" y="262.811" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("402")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.082" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(401)} onClick={() => abrirCotizador(401)} >
                                        <rect x="971.138" y="262.812" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("401")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.081" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(400)} onClick={() => abrirCotizador(400)} >
                                        <rect x="1004.438" y="262.812" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("400")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.081" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(399)} onClick={() => abrirCotizador(399)} >
                                        <rect x="1037.738" y="262.813" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("399")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.08" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(398)} onClick={() => abrirCotizador(398)} >
                                        <rect x="1071.039" y="262.813" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("398")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.08" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(397)} onClick={() => abrirCotizador(397)} >
                                        <rect x="1104.339" y="262.813" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("397")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.079" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(396)} onClick={() => abrirCotizador(396)} >
                                        <rect x="1137.639" y="262.814" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("396")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.079" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(395)} onClick={() => abrirCotizador(395)} >
                                        <rect x="1170.94" y="262.814" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("395")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.079" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(394)} onClick={() => abrirCotizador(394)} >
                                        <rect x="1204.24" y="262.815" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("394")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.078" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(393)} onClick={() => abrirCotizador(393)} >
                                        <rect x="1237.541" y="262.815" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("393")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.077" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(392)} onClick={() => abrirCotizador(392)} >
                                        <rect x="1270.841" y="262.816" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("392")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.077" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(391)} onClick={() => abrirCotizador(391)} >
                                        <rect x="1304.141" y="262.816" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("391")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.077" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(390)} onClick={() => abrirCotizador(390)} >
                                        <rect x="1337.441" y="262.817" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("390")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.076" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(389)} onClick={() => abrirCotizador(389)} >
                                        <rect x="1370.742" y="262.817" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("389")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.075" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(388)} onClick={() => abrirCotizador(388)} >
                                        <rect x="1404.042" y="262.817" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("388")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.298" height="100.075" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(387)} onClick={() => abrirCotizador(387)} >
                                        <rect x="1437.343" y="262.818" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("387")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.075" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(386)} onClick={() => abrirCotizador(386)} >
                                        <rect x="1470.643" y="262.818" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("386")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.074" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(385)} onClick={() => abrirCotizador(385)} >
                                        <rect x="1503.943" y="262.819" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("385")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.073" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(384)} onClick={() => abrirCotizador(384)} >
                                        <rect x="1537.243" y="262.819" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("384")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.298" height="100.073" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(383)} onClick={() => abrirCotizador(383)} >
                                        <rect x="1570.544" y="262.82" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("383")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.298" height="100.072" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(382)} onClick={() => abrirCotizador(382)} >
                                        <rect x="1603.844" y="262.821" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("382")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.298" height="100.072" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(380)} onClick={() => abrirCotizador(380)} >
                                        <rect x="1670.449" y="262.821" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("380")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.071" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(381)} onClick={() => abrirCotizador(381)} >
                                        <rect x="1637.145" y="262.821" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("381")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="100.071" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(414)} onClick={() => abrirCotizador(414)} >
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("414")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" d="
	M547.367,262.792h24.079l0.052,0.013h0.036v100.087h-33.984V272.61C537.549,267.211,541.967,262.792,547.367,262.792z"/>
                                </a>
                                {/* 344 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(344)} onClick={() => abrirCotizador(344)} >
                                        <rect x="571.533" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("344")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.709" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(345)} onClick={() => abrirCotizador(345)} >
                                        <rect x="604.833" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("345")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.708" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(346)} onClick={() => abrirCotizador(346)} >
                                        <rect x="638.134" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("346")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.708" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(347)} onClick={() => abrirCotizador(347)} >
                                        <rect x="671.435" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("347")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.708" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(348)} onClick={() => abrirCotizador(348)} >
                                        <rect x="704.735" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("348")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.707" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(349)} onClick={() => abrirCotizador(349)} >
                                        <rect x="738.035" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("349")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.706" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(350)} onClick={() => abrirCotizador(350)} >
                                        <rect x="771.335" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("350")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.705" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(351)} onClick={() => abrirCotizador(351)} >
                                        <rect x="804.636" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("351")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.705" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(352)} onClick={() => abrirCotizador(352)} >
                                        <rect x="837.936" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("352")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.705" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(353)} onClick={() => abrirCotizador(353)} >
                                        <rect x="871.236" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("353")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.704" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(354)} onClick={() => abrirCotizador(354)} >
                                        <rect x="904.537" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("354")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.703" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(355)} onClick={() => abrirCotizador(355)} >
                                        <rect x="937.837" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("355")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.703" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(356)} onClick={() => abrirCotizador(356)} >
                                        <rect x="971.138" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("356")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.702" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(357)} onClick={() => abrirCotizador(357)} >
                                        <rect x="1004.438" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("357")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.701" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(358)} onClick={() => abrirCotizador(358)} >
                                        <rect x="1037.738" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("358")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.701" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(359)} onClick={() => abrirCotizador(359)} >
                                        <rect x="1071.039" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("359")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.7" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(360)} onClick={() => abrirCotizador(360)} >
                                        <rect x="1104.339" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("360")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.699" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(361)} onClick={() => abrirCotizador(361)} >
                                        <rect x="1137.639" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("361")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.699" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(362)} onClick={() => abrirCotizador(362)} >
                                        <rect x="1170.94" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("362")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.699" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(363)} onClick={() => abrirCotizador(363)} >
                                        <rect x="1204.24" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("363")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.698" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(364)} onClick={() => abrirCotizador(364)} >
                                        <rect x="1237.541" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("364")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.697" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(365)} onClick={() => abrirCotizador(365)} >
                                        <rect x="1270.841" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("365")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.697" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(366)} onClick={() => abrirCotizador(366)} >
                                        <rect x="1304.141" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("366")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.696" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(367)} onClick={() => abrirCotizador(367)} >
                                        <rect x="1337.441" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("367")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.695" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(368)} onClick={() => abrirCotizador(368)} >
                                        <rect x="1370.742" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("368")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.695" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(369)} onClick={() => abrirCotizador(369)} >
                                        <rect x="1404.042" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("369")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.298" height="99.694" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(370)} onClick={() => abrirCotizador(370)} >
                                        <rect x="1437.343" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("370")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.694" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(371)} onClick={() => abrirCotizador(371)} >
                                        <rect x="1470.643" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("371")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.693" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(372)} onClick={() => abrirCotizador(372)} >
                                        <rect x="1503.943" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("372")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.692" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(373)} onClick={() => abrirCotizador(373)} >
                                        <rect x="1537.243" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("373")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.298" height="99.692" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(374)} onClick={() => abrirCotizador(374)} >
                                        <rect x="1570.544" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("374")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.298" height="99.691" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(375)} onClick={() => abrirCotizador(375)} >
                                        <rect x="1603.844" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("375")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.298" height="99.691" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(377)} onClick={() => abrirCotizador(377)} >
                                        <rect x="1670.449" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("377")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.689" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(376)} onClick={() => abrirCotizador(376)} >
                                        <rect x="1637.145" y="362.893" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("376")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="33.297" height="99.69" />
                                </a>
                                {/*486  */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(486)} onClick={() => abrirCotizador(486)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("486")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	369.911,1494.945 346.561,1598.945 413.18,1608.558 428.375,1503.242 "/>
                                </a>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(485)} onClick={() => abrirCotizador(485)} >
                                        <rect x="387.334" y="1538.788" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 2046.223 1345.3276)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("485")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.406" height="39.928" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(484)} onClick={() => abrirCotizador(484)} >
                                        <rect x="426.853" y="1544.489" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 2097.0281 1312.7316)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("484")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.405" height="39.928" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(483)} onClick={() => abrirCotizador(483)} >
                                        <rect x="466.371" y="1550.191" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 2147.8335 1280.1348)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("483")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.405" height="39.927" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(482)} onClick={() => abrirCotizador(482)} >
                                        <rect x="539.128" y="1522.654" transform="matrix(0.9897 0.1428 -0.1428 0.9897 230.784 -63.6926)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("482")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="39.927" height="106.405" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(481)} onClick={() => abrirCotizador(481)} >
                                        <rect x="545.408" y="1561.595" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 2249.4446 1214.941)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("481")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.405" height="39.927" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(480)} onClick={() => abrirCotizador(480)} >
                                        <rect x="584.926" y="1567.297" transform="matrix(-0.1428 0.9897 -0.9897 -0.1428 2300.251 1182.3514)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("480")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.405" height="39.928" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(479)} onClick={() => abrirCotizador(479)} >
                                        <rect x="624.455" y="1572.926" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 2350.9932 1149.6472)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("479")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.404" height="39.927" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(478)} onClick={() => abrirCotizador(478)} >
                                        <rect x="663.973" y="1578.628" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 2401.7998 1117.0562)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("478")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.405" height="39.928" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(477)} onClick={() => abrirCotizador(477)} >
                                        <rect x="736.73" y="1551.091" transform="matrix(0.9897 0.1428 -0.1428 0.9897 236.8706 -91.6212)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("477")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="39.927" height="106.405" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(476)} onClick={() => abrirCotizador(476)} >
                                        <rect x="743.01" y="1590.032" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 2503.4106 1051.8618)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("476")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.405" height="39.927" />
                                </a>
                                {/* 217 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(217)} onClick={() => abrirCotizador(217)} >
                                        <rect x="782.527" y="1595.734" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 2554.2178 1019.2707)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("217")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.406" height="39.928" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(216)} onClick={() => abrirCotizador(216)} >
                                        <rect x="822.036" y="1601.509" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 2605.0781 986.7531)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("216")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.405" height="39.927" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(215)} onClick={() => abrirCotizador(215)} >
                                        <rect x="861.554" y="1607.21" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 2655.8833 954.1582)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("215")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.404" height="39.927" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(214)} onClick={() => abrirCotizador(214)} >
                                        <rect x="901.072" y="1612.912" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 2706.6912 921.5671)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("214")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.405" height="39.928" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(213)} onClick={() => abrirCotizador(213)} >
                                        <rect x="973.83" y="1585.375" transform="matrix(0.9897 0.1428 -0.1428 0.9897 244.1971 -125.1307)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("213")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="39.927" height="106.405" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(212)} onClick={() => abrirCotizador(212)} >
                                        <rect x="980.109" y="1624.316" transform="matrix(-0.1428 0.9897 -0.9897 -0.1428 2808.3052 856.381)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("212")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.405" height="39.928" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(211)} onClick={() => abrirCotizador(211)} >
                                        <rect x="1019.627" y="1630.018" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 2859.1069 823.7753)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("211")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.405" height="39.927" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(210)} onClick={() => abrirCotizador(210)} >
                                        <rect x="1059.156" y="1635.647" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 2909.8484 791.0766)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("210")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.405" height="39.927" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(209)} onClick={() => abrirCotizador(209)} >
                                        <rect x="1098.673" y="1641.349" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 2960.6563 758.4863)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("209")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.406" height="39.928" />
                                </a>

                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(206)} onClick={() => abrirCotizador(206)} >
                                        <rect x="1314.89" y="1634.585" transform="matrix(0.9898 0.1428 -0.1428 0.9898 254.6726 -173.3063)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("206")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="39.928" height="106.406" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(205)} onClick={() => abrirCotizador(205)} >
                                        <rect x="1321.17" y="1673.526" transform="matrix(-0.1428 0.9897 -0.9897 -0.1428 3246.7791 575.0536)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("205")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.405" height="39.928" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(204)} onClick={() => abrirCotizador(204)} >
                                        <rect x="1360.688" y="1679.228" transform="matrix(-0.1428 0.9897 -0.9897 -0.1428 3297.5898 542.4652)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("204")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.405" height="39.928" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(207)} onClick={() => abrirCotizador(207)} >
                                        <rect x="1275.372" y="1628.883" transform="matrix(0.9898 0.1428 -0.1428 0.9898 253.4568 -167.7238)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("207")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="39.927" height="106.405" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(208)} onClick={() => abrirCotizador(208)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("208")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1267.819,1732.061 1216.843,1724.514 1216.843,1617.007 1283.015,1626.746 "/>
                                </a>

                                <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1179.223,1611.579 1164.028,1716.894 1216.843,1724.514 1216.843,1617.007 "/>


                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(202)} onClick={() => abrirCotizador(202)} >
                                        <rect x="1472.963" y="1657.392" transform="matrix(0.9898 0.1428 -0.1428 0.9898 259.5491 -195.6434)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("202")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="39.928" height="106.406" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(201)} onClick={() => abrirCotizador(201)} >
                                        <rect x="1479.243" y="1696.333" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 3449.9951 444.6564)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("201")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.405" height="39.928" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(200)} onClick={() => abrirCotizador(200)} >
                                        <rect x="1518.761" y="1702.036" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 3500.8003 412.0598)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("200")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.405" height="39.927" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(203)} onClick={() => abrirCotizador(203)} >
                                        <rect x="1433.445" y="1651.69" transform="matrix(0.9897 0.1428 -0.1428 0.9897 258.3759 -190.0881)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("203")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="39.928" height="106.406" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(198)} onClick={() => abrirCotizador(198)} >
                                        <rect x="1631.038" y="1680.197" transform="matrix(0.9897 0.1428 -0.1428 0.9897 264.479 -218.0192)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("198")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="39.927" height="106.405" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(197)} onClick={() => abrirCotizador(197)} >
                                        <rect x="1637.316" y="1719.138" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 3653.2114 314.2621)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("197")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.406" height="39.928" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(196)} onClick={() => abrirCotizador(196)} >
                                        <rect x="1676.835" y="1724.84" transform="matrix(-0.1428 0.9898 -0.9898 -0.1428 3704.0166 281.6644)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("196")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="106.406" height="39.928" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(199)} onClick={() => abrirCotizador(199)} >
                                        <rect x="1591.519" y="1674.495" transform="matrix(0.9898 0.1428 -0.1428 0.9898 263.2058 -212.3965)" fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("199")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" width="39.928" height="106.406" />
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(195)} onClick={() => abrirCotizador(195)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("195")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1796.961,1808.217 1742.199,1800.315 1757.393,1695.008 1796.904,1700.709 "/>
                                </a>

                                <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#138F34" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1854.597,1816.532 1796.961,1808.217 1796.904,1700.709 1854.54,1709.025 "/>

                                {/* 194 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(194)} onClick={() => abrirCotizador(194)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("194")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1911.305,1824.714 1854.597,1816.532 1854.54,1709.025 1912.176,1717.341 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(193)} onClick={() => abrirCotizador(193)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("193")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	1969.869,1833.164 1911.646,1825.237 1912.176,1717.333 1969.812,1725.657 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(192)} onClick={() => abrirCotizador(192)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("192")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	2027.505,1841.478 1969.869,1833.161 1969.812,1725.657 2027.447,1733.973 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(191)} onClick={() => abrirCotizador(191)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("191")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	2085.135,1849.793 2027.549,1841.478 2027.447,1733.973 2085.078,1742.288 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(190)} onClick={() => abrirCotizador(190)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("190")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	2153.598,1859.674 2085.135,1849.795 2085.078,1742.288 2154.283,1752.167 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(189)} onClick={() => abrirCotizador(189)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("189")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	2219.462,1869.178 2153.598,1859.674 2153.599,1752.167 2220.146,1761.67 "/>
                                </a>
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(188)} onClick={() => abrirCotizador(188)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("188")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	2286.011,1878.679 2220.146,1869.176 2220.146,1761.67 2285.326,1771.173 "/>
                                </a>

                                {/* 187 */}
                                <a data-tip data-for="tooltipbotom" onMouseOver={() => numeroLotePropiedad(187)} onClick={() => abrirCotizador(187)} >
                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill={definirColores("187")} stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" points="
	2351.189,1888.183 2285.326,1878.681 2285.326,1771.173 2360.056,1781.956 "/>
                                </a>


                                <text transform="matrix(1 0 0 1 1872.1367 1756.4297)" font-family="'Arial-BoldMT'" font-size="11.9999">194</text>
                                <text transform="matrix(1 0 0 1 1929.8145 1765.4297)" font-family="'Arial-BoldMT'" font-size="11.9999">193</text>
                                <text transform="matrix(1 0 0 1 1991.3867 1776.1885)" font-family="'Arial-BoldMT'" font-size="11.9999">192</text>
                                <text transform="matrix(1 0 0 1 2044.2891 1785.9385)" font-family="'Arial-BoldMT'" font-size="11.9999">191</text>
                                <text transform="matrix(1 0 0 1 2108.0332 1801.4814)" font-family="'Arial-BoldMT'" font-size="11.9999">190</text>
                                <text transform="matrix(1 0 0 1 2172.5273 1810.7793)" font-family="'Arial-BoldMT'" font-size="11.9999">189</text>
                                <text transform="matrix(1 0 0 1 2238.4375 1821.6553)" font-family="'Arial-BoldMT'" font-size="11.9999">188</text>
                                <text transform="matrix(1 0 0 1 2310.834 1831.3271)" font-family="'Arial-BoldMT'" font-size="11.9826">187</text>
                                <text transform="matrix(1 0 0 1 1867.6465 1803.5303)" font-family="'Arial-BoldMT'" font-size="6.9999">559.669m2</text>
                                <text transform="matrix(1 0 0 1 1926.8379 1814.0303)" font-family="'Arial-BoldMT'" font-size="6.9999">559.671m2</text>
                                <text transform="matrix(1 0 0 1 1984.5879 1823.4053)" font-family="'Arial-BoldMT'" font-size="6.9999">559.673m2</text>
                                <text transform="matrix(1 0 0 1 2042.7129 1830.5303)" font-family="'Arial-BoldMT'" font-size="6.9999">559.627m2</text>
                                <text transform="matrix(1 0 0 1 2104.9697 1839.7871)" font-family="'Arial-BoldMT'" font-size="6.9999">665.089m2</text>
                                <text transform="matrix(1 0 0 1 2167.9697 1850.2881)" font-family="'Arial-BoldMT'" font-size="6.9999">639.582m2</text>
                                <text transform="matrix(1 0 0 1 2236.2197 1861.5381)" font-family="'Arial-BoldMT'" font-size="6.9999">639.582m2</text>
                                <text transform="matrix(1 0 0 1 2304.4629 1869.2178)" font-family="'Arial-BoldMT'" font-size="6.9999">682.629m2</text>
                                <text transform="matrix(1 0 0 1 1485.1914 1703.207)" font-family="'Arial-BoldMT'" font-size="11.9999">202</text>
                                <text transform="matrix(1 0 0 1 1524.8691 1708.457)" font-family="'Arial-BoldMT'" font-size="11.9999">201</text>
                                <text transform="matrix(1 0 0 1 1563.9365 1714.458)" font-family="'Arial-BoldMT'" font-size="11.9999">200</text>
                                <text transform="matrix(1 0 0 1 1601.0938 1720.457)" font-family="'Arial-BoldMT'" font-size="11.9999">199</text>
                                <text transform="matrix(1 0 0 1 1639.3379 1725.707)" font-family="'Arial-BoldMT'" font-size="11.9999">198</text>
                                <text transform="matrix(1 0 0 1 1679.832 1730.957)" font-family="'Arial-BoldMT'" font-size="11.9999">197</text>
                                <text transform="matrix(1 0 0 1 1721.0352 1737.708)" font-family="'Arial-BoldMT'" font-size="11.9999">196</text>
                                <text transform="matrix(1 0 0 1 1766.0137 1745.2012)" font-family="'Arial-BoldMT'" font-size="11.9826">195</text>
                                <text transform="matrix(1 0 0 1 1289.7808 1665.7051)" font-family="'Arial-BoldMT'" font-size="11.9999">207</text>
                                <text transform="matrix(1 0 0 1 1328.3579 1673.5801)" font-family="'Arial-BoldMT'" font-size="11.9999">206</text>
                                <text transform="matrix(1 0 0 1 1368.0718 1682.5801)" font-family="'Arial-BoldMT'" font-size="11.9999">205</text>
                                <text transform="matrix(1 0 0 1 1405.9043 1688.5801)" font-family="'Arial-BoldMT'" font-size="11.9999">204</text>
                                <text transform="matrix(1 0 0 1 1446.1494 1696.4561)" font-family="'Arial-BoldMT'" font-size="11.9999">203</text>
                                <text transform="matrix(1 0 0 1 907.9448 1610.1943)" font-family="'Arial-BoldMT'" font-size="11.9999">215</text>
                                <text transform="matrix(1 0 0 1 947.6519 1617.0234)" font-family="'Arial-BoldMT'" font-size="11.9999">214</text>
                                <text transform="matrix(1 0 0 1 990.522 1621.4453)" font-family="'Arial-BoldMT'" font-size="11.9999">213</text>
                                <text transform="matrix(1 0 0 1 1028.064 1626.0234)" font-family="'Arial-BoldMT'" font-size="11.9999">212</text>
                                <text transform="matrix(1 0 0 1 1069.5732 1633.5234)" font-family="'Arial-BoldMT'" font-size="11.9999">211</text>
                                <text transform="matrix(1 0 0 1 1106.8076 1640.1953)" font-family="'Arial-BoldMT'" font-size="11.9999">210</text>
                                <text transform="matrix(1 0 0 1 1145.79 1646.1953)" font-family="'Arial-BoldMT'" font-size="11.9999">209</text>
                                <text transform="matrix(1 0 0 1 1240.7979 1661.5918)" font-family="'Arial-BoldMT'" font-size="11.9999">208</text>
                                <text transform="matrix(1 0 0 1 865.9453 1604.1943)" font-family="'Arial-BoldMT'" font-size="11.9999">216</text>
                                <text transform="matrix(1 0 0 1 829.1948 1598.1943)" font-family="'Arial-BoldMT'" font-size="11.9999">217</text>
                                <text transform="matrix(1 0 0 1 790.4683 1593.7705)" font-family="'Arial-BoldMT'" font-size="11.9999">476</text>
                                <text transform="matrix(1 0 0 1 747.7476 1587.3174)" font-family="'Arial-BoldMT'" font-size="11.9999">477</text>
                                <text transform="matrix(1 0 0 1 709.7534 1582.8184)" font-family="'Arial-BoldMT'" font-size="11.9999">478</text>
                                <text transform="matrix(1 0 0 1 669.2954 1575.6934)" font-family="'Arial-BoldMT'" font-size="11.9999">479</text>
                                <text transform="matrix(1 0 0 1 631.8311 1570.0684)" font-family="'Arial-BoldMT'" font-size="11.9999">480</text>
                                <text transform="matrix(1 0 0 1 594.0054 1562.9434)" font-family="'Arial-BoldMT'" font-size="11.9999">481</text>
                                <text transform="matrix(1 0 0 1 552.7617 1556.9424)" font-family="'Arial-BoldMT'" font-size="11.9999">482</text>
                                <text transform="matrix(1 0 0 1 513.0171 1550.9424)" font-family="'Arial-BoldMT'" font-size="11.9999">483</text>
                                <text transform="matrix(1 0 0 1 474.0356 1546.4434)" font-family="'Arial-BoldMT'" font-size="11.9999">484</text>
                                <text transform="matrix(1 0 0 1 434.2197 1542.3955)" font-family="'Arial-BoldMT'" font-size="11.9999">485</text>
                                <text transform="matrix(1 0 0 1 380.2925 1537.5215)" font-family="'Arial-BoldMT'" font-size="11.9999">486</text>
                                <text transform="matrix(1 0 0 1 2394.7402 1836.7744)" font-family="'Arial-BoldMT'" font-size="11.9826">186</text>
                                <text transform="matrix(1 0 0 1 2381.2158 1873.874)" font-family="'Arial-BoldMT'" font-size="6.9999">1,031.430m2</text>
                                <text transform="matrix(1 0 0 1 1230.7627 1706.9473)" font-family="'Arial-BoldMT'" font-size="6.9999">603.370m2</text>
                                <text transform="matrix(1 0 0 1 1756.2891 1788.6973)" font-family="'Arial-BoldMT'" font-size="6.9999">457.69m2</text>
                                <text transform="matrix(1 0 0 1 1711.5977 1782.3223)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 1672.2227 1774.4473)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 1633.5977 1766.5723)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 1590.4727 1763.5723)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 1512.4717 1749.6973)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 1553.3467 1756.4473)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 1432.9727 1737.3223)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 1471.9727 1743.6963)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 1354.5972 1727.1963)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 1393.2227 1732.4473)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 1278.4727 1715.9473)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 1314.8472 1722.6973)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 1054.2227 1688.1973)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 1132.9727 1700.9473)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 1094.7227 1694.1973)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 936.4727 1663.4473)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 1013.7227 1682.1973)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 894.3853 1660.9717)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 975.4727 1672.4473)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 541.9741 1607.1963)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 499.5562 1600.9717)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 855.4731 1653.6963)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 817.0869 1645.9717)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 773.7231 1642.4473)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 737.8672 1637.7217)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 696.4736 1631.9463)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 656.7236 1627.4463)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 580.6079 1614.6963)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 618.4741 1621.4463)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 461.7236 1589.9463)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 422.959 1585.9717)" font-family="'Arial-BoldMT'" font-size="6.9999">387.76m2</text>
                                <text transform="matrix(1 0 0 1 366.4565 1575.6963)" font-family="'Arial-BoldMT'" font-size="6.9999">607.10m2</text>
                                <text transform="matrix(1 0 0 1 737.6641 162.6719)" font-family="'Arial-BoldMT'" font-size="11.9999">422</text>
                                <text transform="matrix(1 0 0 1 771.3354 162.7632)" font-family="'Arial-BoldMT'" font-size="11.9999">423</text>
                                <text transform="matrix(1 0 0 1 804.6328 164.1577)" font-family="'Arial-BoldMT'" font-size="11.9999">424</text>
                                <text transform="matrix(1 0 0 1 836.4321 164.1577)" font-family="'Arial-BoldMT'" font-size="11.9999">425</text>
                                <text transform="matrix(1 0 0 1 869.3574 162.6719)" font-family="'Arial-BoldMT'" font-size="11.9999">426</text>
                                <text transform="matrix(1 0 0 1 904.0986 162.6719)" font-family="'Arial-BoldMT'" font-size="11.9999">427</text>
                                <text transform="matrix(1 0 0 1 937.8374 162.6719)" font-family="'Arial-BoldMT'" font-size="11.9999">428</text>
                                <text transform="matrix(1 0 0 1 971.1377 162.6719)" font-family="'Arial-BoldMT'" font-size="11.9999">429</text>
                                <text transform="matrix(1 0 0 1 1004.438 162.6719)" font-family="'Arial-BoldMT'" font-size="11.9999">430</text>
                                <text transform="matrix(1 0 0 1 1037.7383 162.6724)" font-family="'Arial-BoldMT'" font-size="11.9999">431</text>
                                <text transform="matrix(1 0 0 1 1071.0356 162.6719)" font-family="'Arial-BoldMT'" font-size="11.9999">432</text>
                                <text transform="matrix(1 0 0 1 1104.3389 162.6719)" font-family="'Arial-BoldMT'" font-size="11.9999">433</text>
                                <text transform="matrix(1 0 0 1 1135.9214 162.7632)" font-family="'Arial-BoldMT'" font-size="11.9999">434</text>
                                <text transform="matrix(1 0 0 1 1170.9399 162.6719)" font-family="'Arial-BoldMT'" font-size="11.9999">435</text>
                                <text transform="matrix(1 0 0 1 1204.2368 162.6724)" font-family="'Arial-BoldMT'" font-size="11.9999">436</text>
                                <text transform="matrix(1 0 0 1 1237.5405 164.7388)" font-family="'Arial-BoldMT'" font-size="11.9999">437</text>
                                <text transform="matrix(1 0 0 1 1270.8408 162.6719)" font-family="'Arial-BoldMT'" font-size="11.9999">438</text>
                                <text transform="matrix(1 0 0 1 1304.1382 162.4146)" font-family="'Arial-BoldMT'" font-size="11.9999">439</text>
                                <text transform="matrix(1 0 0 1 1337.4414 163.5767)" font-family="'Arial-BoldMT'" font-size="11.9999">440</text>
                                <text transform="matrix(1 0 0 1 1370.7417 162.7632)" font-family="'Arial-BoldMT'" font-size="11.9999">441</text>
                                <text transform="matrix(1 0 0 1 1404.0391 164.7388)" font-family="'Arial-BoldMT'" font-size="11.9999">442</text>
                                <text transform="matrix(1 0 0 1 1437.3398 165.6099)" font-family="'Arial-BoldMT'" font-size="11.9999">443</text>
                                <text transform="matrix(1 0 0 1 1470.6426 165.3193)" font-family="'Arial-BoldMT'" font-size="11.9999">444</text>
                                <text transform="matrix(1 0 0 1 1503.9395 166.772)" font-family="'Arial-BoldMT'" font-size="11.9999">445</text>
                                <text transform="matrix(1 0 0 1 1537.2402 167.0625)" font-family="'Arial-BoldMT'" font-size="11.9999">446</text>
                                <text transform="matrix(1 0 0 1 1570.5439 167.0625)" font-family="'Arial-BoldMT'" font-size="11.9999">447</text>
                                <text transform="matrix(1 0 0 1 1601.0938 167.0625)" font-family="'Arial-BoldMT'" font-size="11.9999">448</text>
                                <text transform="matrix(1 0 0 1 1637.1445 166.772)" font-family="'Arial-BoldMT'" font-size="11.9999">449</text>
                                <text transform="matrix(1 0 0 1 640.2349 162.6719)" font-family="'Arial-BoldMT'" font-size="11.9999">419</text>
                                <text transform="matrix(1 0 0 1 672.4873 162.6719)" font-family="'Arial-BoldMT'" font-size="11.9999">420</text>
                                <text transform="matrix(1 0 0 1 704.7349 162.7632)" font-family="'Arial-BoldMT'" font-size="11.9999">421</text>
                                <text transform="matrix(1 0 0 1 536.3716 162.6719)" font-family="'Arial-BoldMT'" font-size="11.9999">416</text>
                                <text transform="matrix(1 0 0 1 571.5332 164.1577)" font-family="'Arial-BoldMT'" font-size="11.9999">417</text>
                                <text transform="matrix(1 0 0 1 604.8335 162.7632)" font-family="'Arial-BoldMT'" font-size="11.9999">418</text>
                                <text transform="matrix(1 0 0 1 502.5332 162.6719)" font-family="'Arial-BoldMT'" font-size="11.9999">415</text>
                                <text transform="matrix(1 0 0 1 500.3647 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">411.61M2</text>
                                <text transform="matrix(1 0 0 1 535.3804 203.2661)" font-family="'Arial-BoldMT'" font-size="6.0001">394.52M2</text>
                                <text transform="matrix(1 0 0 1 569.0317 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">400.5M2</text>
                                <text transform="matrix(1 0 0 1 602.4922 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">400.67M2</text>
                                <text transform="matrix(1 0 0 1 635.7822 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">402.68M2</text>
                                <text transform="matrix(1 0 0 1 669.0723 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">403.82M2</text>
                                <text transform="matrix(1 0 0 1 704.0298 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">406.9M2</text>
                                <text transform="matrix(1 0 0 1 735.6514 203.2661)" font-family="'Arial-BoldMT'" font-size="6.0001">408.62M2</text>
                                <text transform="matrix(1 0 0 1 768.9409 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">409.89M2</text>
                                <text transform="matrix(1 0 0 1 802.231 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">412.85M2</text>
                                <text transform="matrix(1 0 0 1 835.5205 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">413.87M2</text>
                                <text transform="matrix(1 0 0 1 868.8101 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">414.86M2</text>
                                <text transform="matrix(1 0 0 1 901.2661 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">416..78M2</text>
                                <text transform="matrix(1 0 0 1 934.188 203.2661)" font-family="'Arial-BoldMT'" font-size="6.0001">418.26M2</text>
                                <text transform="matrix(1 0 0 1 967.8394 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">420.64M2</text>
                                <text transform="matrix(1 0 0 1 1001.4907 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">421.52M2</text>
                                <text transform="matrix(1 0 0 1 1035.1421 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">424.13M2</text>
                                <text transform="matrix(1 0 0 1 1068.793 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">425.84M2</text>
                                <text transform="matrix(1 0 0 1 1102.4443 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">426.98M2</text>
                                <text transform="matrix(1 0 0 1 1136.0952 203.2661)" font-family="'Arial-BoldMT'" font-size="6.0001">428.58M2</text>
                                <text transform="matrix(1 0 0 1 1169.7466 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">429.65M2</text>
                                <text transform="matrix(1 0 0 1 1203.3979 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">432.18M2</text>
                                <text transform="matrix(1 0 0 1 1237.0493 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">433.2M2</text>
                                <text transform="matrix(1 0 0 1 1267.3633 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">434.78M2</text>
                                <text transform="matrix(1 0 0 1 1301.0146 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">435.23M2</text>
                                <text transform="matrix(1 0 0 1 1334.666 203.2661)" font-family="'Arial-BoldMT'" font-size="6.0001">438.56M2</text>
                                <text transform="matrix(1 0 0 1 1368.1563 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">439.11M2</text>
                                <text transform="matrix(1 0 0 1 1403.1143 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">443.2M2</text>
                                <text transform="matrix(1 0 0 1 1434.7363 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">443.68M2</text>
                                <text transform="matrix(1 0 0 1 1468.0254 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">446.76M2</text>
                                <text transform="matrix(1 0 0 1 1505.2051 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">447.26</text>
                                <text transform="matrix(1 0 0 1 1532.6064 203.2661)" font-family="'Arial-BoldMT'" font-size="6.0001">448.61M2</text>
                                <text transform="matrix(1 0 0 1 1567.9102 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">449.59M2</text>
                                <text transform="matrix(1 0 0 1 1601.2002 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">452.83M2</text>
                                <text transform="matrix(1 0 0 1 1634.4902 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">453.21M2</text>
                                <text transform="matrix(1 0 0 1 1667.7715 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">455.22M2</text>
                                <text transform="matrix(1 0 0 1 1709.2539 203.2666)" font-family="'Arial-BoldMT'" font-size="6.0001">733.69M2</text>
                                <text transform="matrix(1 0 0 1 1442.792 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">387</text>
                                <text transform="matrix(1 0 0 1 1408.9863 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">388</text>
                                <text transform="matrix(1 0 0 1 1376.1841 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">389</text>
                                <text transform="matrix(1 0 0 1 1345.7598 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">390</text>
                                <text transform="matrix(1 0 0 1 1311.2617 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">391</text>
                                <text transform="matrix(1 0 0 1 1277.7012 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">392</text>
                                <text transform="matrix(1 0 0 1 1244.0566 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">393</text>
                                <text transform="matrix(1 0 0 1 1210.374 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">394</text>
                                <text transform="matrix(1 0 0 1 1177.3315 312.855)" font-family="'Arial-BoldMT'" font-size="11.9999">395</text>
                                <text transform="matrix(1 0 0 1 1144.2607 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">396</text>
                                <text transform="matrix(1 0 0 1 1112.0342 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">397</text>
                                <text transform="matrix(1 0 0 1 1729.2031 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">379</text>
                                <text transform="matrix(1 0 0 1 1677.9121 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">380</text>
                                <text transform="matrix(1 0 0 1 1646.1875 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">381</text>
                                <text transform="matrix(1 0 0 1 1612.8926 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">382</text>
                                <text transform="matrix(1 0 0 1 1579.501 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">383</text>
                                <text transform="matrix(1 0 0 1 1546.1455 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">384</text>
                                <text transform="matrix(1 0 0 1 1512.6934 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">385</text>
                                <text transform="matrix(1 0 0 1 1479.3027 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">386</text>
                                <text transform="matrix(1 0 0 1 1045.5361 312.855)" font-family="'Arial-BoldMT'" font-size="11.9999">399</text>
                                <text transform="matrix(1 0 0 1 1011.8931 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">400</text>
                                <text transform="matrix(1 0 0 1 978.2905 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">401</text>
                                <text transform="matrix(1 0 0 1 944.8438 312.855)" font-family="'Arial-BoldMT'" font-size="11.9999">402</text>
                                <text transform="matrix(1 0 0 1 911.1997 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">403</text>
                                <text transform="matrix(1 0 0 1 877.7949 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">404</text>
                                <text transform="matrix(1 0 0 1 844.2188 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">405</text>
                                <text transform="matrix(1 0 0 1 812.5098 312.855)" font-family="'Arial-BoldMT'" font-size="11.9999">406</text>
                                <text transform="matrix(1 0 0 1 776.4321 312.855)" font-family="'Arial-BoldMT'" font-size="11.9999">407</text>
                                <text transform="matrix(1 0 0 1 745.8086 312.855)" font-family="'Arial-BoldMT'" font-size="11.9999">408</text>
                                <text transform="matrix(1 0 0 1 712.2373 312.855)" font-family="'Arial-BoldMT'" font-size="11.9999">409</text>
                                <text transform="matrix(1 0 0 1 679.0356 312.855)" font-family="'Arial-BoldMT'" font-size="11.9999">410</text>
                                <text transform="matrix(1 0 0 1 742.7808 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">298.6M2</text>
                                <text transform="matrix(1 0 0 1 772.8926 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">301.54M2</text>
                                <text transform="matrix(1 0 0 1 806.4194 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.86M2</text>
                                <text transform="matrix(1 0 0 1 839.9458 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.86M2</text>
                                <text transform="matrix(1 0 0 1 541.1982 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.89M2</text>
                                <text transform="matrix(1 0 0 1 575.2251 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">300.68M2</text>
                                <text transform="matrix(1 0 0 1 608.752 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.65M2</text>
                                <text transform="matrix(1 0 0 1 642.2783 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.78M2</text>
                                <text transform="matrix(1 0 0 1 675.8057 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.92M2</text>
                                <text transform="matrix(1 0 0 1 709.2539 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">300.62M2</text>
                                <text transform="matrix(1 0 0 1 873.4731 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.36M3</text>
                                <text transform="matrix(1 0 0 1 907.0415 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.97M2</text>
                                <text transform="matrix(1 0 0 1 940.5684 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.95M2</text>
                                <text transform="matrix(1 0 0 1 974.0171 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">300.22M2</text>
                                <text transform="matrix(1 0 0 1 1007.5439 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.86M2</text>
                                <text transform="matrix(1 0 0 1 1041.0708 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.87M2</text>
                                <text transform="matrix(1 0 0 1 1074.5977 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.69M2</text>
                                <text transform="matrix(1 0 0 1 1108.0464 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">300.26M2</text>
                                <text transform="matrix(1 0 0 1 1141.5732 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.58M2</text>
                                <text transform="matrix(1 0 0 1 1175.0996 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.98M2</text>
                                <text transform="matrix(1 0 0 1 1207.5454 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.78M2</text>
                                <text transform="matrix(1 0 0 1 1242.0752 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">300.15M2</text>
                                <text transform="matrix(1 0 0 1 1273.4697 348.3306)" font-family="'Arial-BoldMT'" font-size="6.0001">299.64M2</text>
                                <text transform="matrix(1 0 0 1 1306.8223 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.63M2</text>
                                <text transform="matrix(1 0 0 1 1340.2524 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.86M2</text>
                                <text transform="matrix(1 0 0 1 1373.6831 348.3306)" font-family="'Arial-BoldMT'" font-size="6.0001">299.86M2</text>
                                <text transform="matrix(1 0 0 1 1407.1133 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">300.32M2</text>
                                <text transform="matrix(1 0 0 1 1440.4658 348.3306)" font-family="'Arial-BoldMT'" font-size="6.0001">300.23M3</text>
                                <text transform="matrix(1 0 0 1 1474.3926 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.36M3</text>
                                <text transform="matrix(1 0 0 1 1507.249 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.97M2</text>
                                <text transform="matrix(1 0 0 1 1540.5488 348.3306)" font-family="'Arial-BoldMT'" font-size="6.0001">299.95M2</text>
                                <text transform="matrix(1 0 0 1 1574.1094 348.3306)" font-family="'Arial-BoldMT'" font-size="6.0001">300.22M2</text>
                                <text transform="matrix(1 0 0 1 1607.5391 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">299.86M2</text>
                                <text transform="matrix(1 0 0 1 1644.168 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">300.1M2</text>
                                <text transform="matrix(1 0 0 1 1674.2891 348.7197)" font-family="'Arial-BoldMT'" font-size="6.0001">300.86M2</text>
                                <text transform="matrix(1 0 0 1 545.3218 428.812)" font-family="'Arial-BoldMT'" font-size="6.0001">298.6M2</text>
                                <text transform="matrix(0.872 -0.0054 0.0062 1 1716.1162 428.415)" font-family="'Arial-BoldMT'" font-size="7.8589">638.833m2</text>
                                <text transform="matrix(1 0 0 1 1078.666 399.9839)" font-family="'Arial-BoldMT'" font-size="11.9999">359</text>
                                <text transform="matrix(1 0 0 1 1112.0342 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">360</text>
                                <text transform="matrix(1 0 0 1 1145.3672 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">361</text>
                                <text transform="matrix(1 0 0 1 1177.3315 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">362</text>
                                <text transform="matrix(1 0 0 1 1210.6519 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">363</text>
                                <text transform="matrix(1 0 0 1 1244.0566 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">364</text>
                                <text transform="matrix(1 0 0 1 1277.7012 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">365</text>
                                <text transform="matrix(1 0 0 1 1311.2617 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">366</text>
                                <text transform="matrix(1 0 0 1 1344.75 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">367</text>
                                <text transform="matrix(1 0 0 1 1378.1426 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">368</text>
                                <text transform="matrix(1 0 0 1 1411.5229 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">369</text>
                                <text transform="matrix(1 0 0 1 1444.8916 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">370</text>
                                <text transform="matrix(1 0 0 1 1478.2246 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">371</text>
                                <text transform="matrix(1 0 0 1 1510.1895 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">372</text>
                                <text transform="matrix(1 0 0 1 1543.5098 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">373</text>
                                <text transform="matrix(1 0 0 1 1576.9141 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">374</text>
                                <text transform="matrix(1 0 0 1 1610.5586 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">375</text>
                                <text transform="matrix(1 0 0 1 1644.1191 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">376</text>
                                <text transform="matrix(1 0 0 1 1677.6113 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">377</text>
                                <text transform="matrix(1 0 0 1 1723.7988 399.9839)" font-family="'Arial-BoldMT'" font-size="11.9999">378</text>
                                <text transform="matrix(1 0 0 1 944.8438 399.9839)" font-family="'Arial-BoldMT'" font-size="11.9999">355</text>
                                <text transform="matrix(1 0 0 1 978.4043 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">356</text>
                                <text transform="matrix(1 0 0 1 1011.8931 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">357</text>
                                <text transform="matrix(1 0 0 1 1045.2852 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">358</text>
                                <text transform="matrix(1 0 0 1 812.5098 399.9839)" font-family="'Arial-BoldMT'" font-size="11.9999">351</text>
                                <text transform="matrix(1 0 0 1 844.4746 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">352</text>
                                <text transform="matrix(1 0 0 1 877.7949 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">353</text>
                                <text transform="matrix(1 0 0 1 911.1997 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">354</text>
                                <text transform="matrix(1 0 0 1 679.0356 399.9839)" font-family="'Arial-BoldMT'" font-size="11.9999">347</text>
                                <text transform="matrix(1 0 0 1 712.4282 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">348</text>
                                <text transform="matrix(1 0 0 1 745.8086 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">349</text>
                                <text transform="matrix(1 0 0 1 779.1772 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">350</text>
                                <text transform="matrix(1 0 0 1 544.938 399.9839)" font-family="'Arial-BoldMT'" font-size="11.9999">343</text>
                                <text transform="matrix(1 0 0 1 578.3423 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">344</text>
                                <text transform="matrix(1 0 0 1 611.9868 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">345</text>
                                <text transform="matrix(1 0 0 1 645.5474 399.9844)" font-family="'Arial-BoldMT'" font-size="11.9999">346</text>
                                <text transform="matrix(1 0 0 1 575.3374 428.812)" font-family="'Arial-BoldMT'" font-size="6.0001">301.54M2</text>
                                <text transform="matrix(1 0 0 1 608.7681 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.86M2</text>
                                <text transform="matrix(1 0 0 1 642.1982 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.86M2</text>
                                <text transform="matrix(1 0 0 1 675.6284 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.64M2</text>
                                <text transform="matrix(1 0 0 1 709.0591 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.63M2</text>
                                <text transform="matrix(1 0 0 1 742.4893 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.86M2</text>
                                <text transform="matrix(1 0 0 1 775.9199 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.86M2</text>
                                <text transform="matrix(1 0 0 1 809.272 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">300.32M2</text>
                                <text transform="matrix(1 0 0 1 843.3447 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">300.23M2</text>
                                <text transform="matrix(1 0 0 1 876.7749 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.89M2</text>
                                <text transform="matrix(1 0 0 1 907.8423 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">300.68M2</text>
                                <text transform="matrix(1 0 0 1 941.1426 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.65M2</text>
                                <text transform="matrix(1 0 0 1 975.9204 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.78M2</text>
                                <text transform="matrix(1 0 0 1 1007.7437 428.3081)" font-family="'Arial-BoldMT'" font-size="6.0001">299.92M2</text>
                                <text transform="matrix(1 0 0 1 1041.0708 428.812)" font-family="'Arial-BoldMT'" font-size="6.0001">300.62M2</text>
                                <text transform="matrix(1 0 0 1 1074.3438 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.89M2</text>
                                <text transform="matrix(1 0 0 1 1107.644 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.51M2</text>
                                <text transform="matrix(1 0 0 1 1140.9443 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.93M2</text>
                                <text transform="matrix(1 0 0 1 1174.2451 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">300.23M3</text>
                                <text transform="matrix(1 0 0 1 1206.5669 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.36M3</text>
                                <text transform="matrix(1 0 0 1 1240.0396 428.812)" font-family="'Arial-BoldMT'" font-size="6.0001">299.97M2</text>
                                <text transform="matrix(1 0 0 1 1273.4697 428.812)" font-family="'Arial-BoldMT'" font-size="6.0001">299.95M2</text>
                                <text transform="matrix(1 0 0 1 1306.8223 428.812)" font-family="'Arial-BoldMT'" font-size="6.0001">300.22M2</text>
                                <text transform="matrix(1 0 0 1 1340.2524 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.86M2</text>
                                <text transform="matrix(1 0 0 1 1373.6831 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.87M2</text>
                                <text transform="matrix(1 0 0 1 1407.1133 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.92M2</text>
                                <text transform="matrix(1 0 0 1 1440.4658 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">300.42M2</text>
                                <text transform="matrix(1 0 0 1 1473.8965 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.69M2</text>
                                <text transform="matrix(1 0 0 1 1507.248 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">300.26M2</text>
                                <text transform="matrix(1 0 0 1 1540.6787 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.58M2</text>
                                <text transform="matrix(1 0 0 1 1574.1094 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.98M2</text>
                                <text transform="matrix(1 0 0 1 1607.5391 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.78M2</text>
                                <text transform="matrix(1 0 0 1 1640.8926 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">300.15M2</text>
                                <text transform="matrix(1 0 0 1 1674.3301 428.8125)" font-family="'Arial-BoldMT'" font-size="6.0001">299.38M2</text>
                                <text transform="matrix(1 0 0 1 1076.4302 312.4512)" font-family="'Arial-BoldMT'" font-size="11.9999">398</text>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#70954A" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
	M1800.972,83.683l0.209,139.319"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#70954A" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
	M2048.11,308.294"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#70954A" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
	M2198.714,455.445"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#70954A" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
	M2188.965,448.093"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#70954A" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
	M2204.738,585.554"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#70954A" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
	M2204.739,585.553"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#70954A" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
	M2048.11,308.294"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#70954A" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
	M1915.676,1006.396"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#70954A" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
	M1874.055,1087.09"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#70954A" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
	M1874.055,1087.09"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#70954A" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
	M2008.154,1322.263"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#70954A" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
	M2008.154,1322.263"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#70954A" stroke="#000000" stroke-width="0.216" stroke-miterlimit="22.9256" d="
	M2111.96,1461.681"/>
                                <line fill="none" stroke="#000000" stroke-width="0.5669" stroke-miterlimit="22.9256" x1="1328.358" y1="1096.913" x2="1428.085" y2="1096.913" />
                                <text transform="matrix(1 0 0 1 1353.5957 1085.5439)" font-family="'Arial-BoldMT'" font-size="11.9999">475</text>
                                <text transform="matrix(1 0 0 1 1348.0093 1072.6104)" font-family="'Arial-BoldMT'" font-size="6.9999">546.89m2</text>
                                <text transform="matrix(1 0 0 1 642.4868 312.855)" font-family="'Arial-BoldMT'" font-size="11.9999">411</text>
                                <text transform="matrix(1 0 0 1 609.459 312.855)" font-family="'Arial-BoldMT'" font-size="11.9999">412</text>
                                <text transform="matrix(1 0 0 1 578.3423 312.855)" font-family="'Arial-BoldMT'" font-size="11.9999">413</text>
                                <text transform="matrix(1 0 0 1 1670.4492 167.0625)" font-family="'Arial-BoldMT'" font-size="11.9999">450</text>
                                <text transform="matrix(1 0 0 1 1708.9492 167.0625)" font-family="'Arial-BoldMT'" font-size="11.9999">451</text>
                                <text transform="matrix(1 0 0 1 544.938 312.855)" font-family="'Arial-BoldMT'" font-size="11.9999">414</text>


                        </svg>
                </Fragment >
        )
}


export default Plano;