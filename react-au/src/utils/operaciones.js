export const operacionesFunc = (newBoleto) => {
  // realizar algunas operaciones con la variable
  if (newBoleto.opcion === "Entero") {
    newBoleto.descuento = 1;
  } else if (newBoleto.opcion === "Estudiante") {
    newBoleto.descuento = 50;
  } else if (newBoleto.opcion === "Insen") {
    newBoleto.descuento = 50;
  } else if (newBoleto.opcion === "Maestro") {
    newBoleto.descuento = 25;
  }

  const arrayReact = [];
  const objetosJson = [
    {
      _id: {
        $oid: "644162672e1d7d7f1442ec0b",
      },
      code: 393,
      origen: "coatzacoalcos",
      destino: "MUNDO NUEVO",
      fecha_creacion: {
        $date: "2023-04-20T16:03:51.618Z",
      },
      updated_at: {
        $date: "2023-04-20T16:03:51.618Z",
      },
      precio: 23,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644162912e1d7d7f1442ec0f",
      },
      code: 394,
      origen: "coatzacoalcos",
      destino: "NANCHITAL",
      fecha_creacion: {
        $date: "2023-04-20T16:04:33.215Z",
      },
      updated_at: {
        $date: "2023-04-20T16:04:33.215Z",
      },
      precio: 26,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644162ae2e1d7d7f1442ec13",
      },
      code: 395,
      origen: "coatzacoalcos",
      destino: "LA NORIA",
      fecha_creacion: {
        $date: "2023-04-20T16:05:02.134Z",
      },
      updated_at: {
        $date: "2023-04-20T16:05:02.134Z",
      },
      precio: 26,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644162c62e1d7d7f1442ec17",
      },
      code: 396,
      origen: "coatzacoalcos",
      destino: "LA BOMBA",
      fecha_creacion: {
        $date: "2023-04-20T16:05:26.837Z",
      },
      updated_at: {
        $date: "2023-04-20T16:05:26.837Z",
      },
      precio: 26,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644162e02e1d7d7f1442ec1b",
      },
      code: 397,
      origen: "coatzacoalcos",
      destino: "LA GRAVERA",
      fecha_creacion: {
        $date: "2023-04-20T16:05:52.274Z",
      },
      updated_at: {
        $date: "2023-04-20T16:05:52.274Z",
      },
      precio: 26,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644163002e1d7d7f1442ec31",
      },
      code: 398,
      origen: "coatzacoalcos",
      destino: "LOS AMATES",
      fecha_creacion: {
        $date: "2023-04-20T16:06:24.501Z",
      },
      updated_at: {
        $date: "2023-04-20T16:06:24.501Z",
      },
      precio: 27,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644163192e1d7d7f1442ec35",
      },
      code: 399,
      origen: "coatzacoalcos",
      destino: "POLLO DE ORO",
      fecha_creacion: {
        $date: "2023-04-20T16:06:49.445Z",
      },
      updated_at: {
        $date: "2023-04-20T16:06:49.445Z",
      },
      precio: 27,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644163332e1d7d7f1442ec39",
      },
      code: 400,
      origen: "coatzacoalcos",
      destino: "LAS MARGAITAS",
      fecha_creacion: {
        $date: "2023-04-20T16:07:15.466Z",
      },
      updated_at: {
        $date: "2023-04-20T16:07:15.466Z",
      },
      precio: 27,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644163752e1d7d7f1442ec3d",
      },
      code: 401,
      origen: "coatzacoalcos",
      destino: "SAN FELIPE",
      fecha_creacion: {
        $date: "2023-04-20T16:08:21.308Z",
      },
      updated_at: {
        $date: "2023-04-20T16:08:21.308Z",
      },
      precio: 27,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644163972e1d7d7f1442ec41",
      },
      code: 402,
      origen: "coatzacoalcos",
      destino: "EL CHAPO ",
      fecha_creacion: {
        $date: "2023-04-20T16:08:55.581Z",
      },
      updated_at: {
        $date: "2023-04-20T16:08:55.581Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644163b12e1d7d7f1442ec45",
      },
      code: 403,
      origen: "coatzacoalcos",
      destino: "LA FELICIDAD ",
      fecha_creacion: {
        $date: "2023-04-20T16:09:21.378Z",
      },
      updated_at: {
        $date: "2023-04-20T16:09:21.378Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644163d82e1d7d7f1442ec49",
      },
      code: 404,
      origen: "coatzacoalcos",
      destino: "CHICHIGAPAN",
      fecha_creacion: {
        $date: "2023-04-20T16:10:00.692Z",
      },
      updated_at: {
        $date: "2023-04-20T16:10:00.692Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644163fc2e1d7d7f1442ec4d",
      },
      code: 405,
      origen: "coatzacoalcos",
      destino: "EL BRONCE",
      fecha_creacion: {
        $date: "2023-04-20T16:10:36.252Z",
      },
      updated_at: {
        $date: "2023-04-20T16:10:36.252Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644164362e1d7d7f1442ec53",
      },
      code: 406,
      origen: "coatzacoalcos",
      destino: "LA VIRGEN",
      fecha_creacion: {
        $date: "2023-04-20T16:11:34.347Z",
      },
      updated_at: {
        $date: "2023-04-20T16:11:34.347Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441644e2e1d7d7f1442ec5b",
      },
      code: 407,
      origen: "coatzacoalcos",
      destino: "KM.25",
      fecha_creacion: {
        $date: "2023-04-20T16:11:58.552Z",
      },
      updated_at: {
        $date: "2023-04-20T16:11:58.552Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644164722e1d7d7f1442ec61",
      },
      code: 408,
      origen: "coatzacoalcos",
      destino: "KM.20",
      fecha_creacion: {
        $date: "2023-04-20T16:12:34.949Z",
      },
      updated_at: {
        $date: "2023-04-20T16:12:34.949Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644164992e1d7d7f1442ec69",
      },
      code: 409,
      origen: "coatzacoalcos",
      destino: "IXHUATLAN D O.",
      fecha_creacion: {
        $date: "2023-04-20T16:13:13.112Z",
      },
      updated_at: {
        $date: "2023-04-20T16:13:13.112Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644164d12e1d7d7f1442ec6d",
      },
      code: 410,
      origen: "coatzacoalcos",
      destino: "IXH. DEL SUR.",
      fecha_creacion: {
        $date: "2023-04-20T16:14:09.247Z",
      },
      updated_at: {
        $date: "2023-04-20T16:14:09.247Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644164ef2e1d7d7f1442ec71",
      },
      code: 411,
      origen: "coatzacoalcos",
      destino: "LA GARDENIA",
      fecha_creacion: {
        $date: "2023-04-20T16:14:39.690Z",
      },
      updated_at: {
        $date: "2023-04-20T16:14:39.690Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644165082e1d7d7f1442ec75",
      },
      code: 412,
      origen: "coatzacoalcos",
      destino: "SANTA CLARA",
      fecha_creacion: {
        $date: "2023-04-20T16:15:04.313Z",
      },
      updated_at: {
        $date: "2023-04-20T16:15:04.313Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644165212e1d7d7f1442ec79",
      },
      code: 413,
      origen: "coatzacoalcos",
      destino: "LA ESPERANZA",
      fecha_creacion: {
        $date: "2023-04-20T16:15:29.292Z",
      },
      updated_at: {
        $date: "2023-04-20T16:15:29.292Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644165372e1d7d7f1442ec7d",
      },
      code: 414,
      origen: "coatzacoalcos",
      destino: "SAN ANDRES",
      fecha_creacion: {
        $date: "2023-04-20T16:15:51.757Z",
      },
      updated_at: {
        $date: "2023-04-20T16:15:51.757Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644165502e1d7d7f1442ec81",
      },
      code: 415,
      origen: "coatzacoalcos",
      destino: "RANCHO ALEGRE",
      fecha_creacion: {
        $date: "2023-04-20T16:16:16.485Z",
      },
      updated_at: {
        $date: "2023-04-20T16:16:16.485Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644165692e1d7d7f1442ec85",
      },
      code: 416,
      origen: "coatzacoalcos",
      destino: "TRANCAS VIEJAS",
      fecha_creacion: {
        $date: "2023-04-20T16:16:41.998Z",
      },
      updated_at: {
        $date: "2023-04-20T16:16:41.998Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441658f2e1d7d7f1442ec89",
      },
      code: 417,
      origen: "coatzacoalcos",
      destino: "CASAS BLANCAS",
      fecha_creacion: {
        $date: "2023-04-20T16:17:19.408Z",
      },
      updated_at: {
        $date: "2023-04-20T16:17:19.408Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644165a42e1d7d7f1442ec8d",
      },
      code: 418,
      origen: "coatzacoalcos",
      destino: "LA GLORIA",
      fecha_creacion: {
        $date: "2023-04-20T16:17:40.719Z",
      },
      updated_at: {
        $date: "2023-04-20T16:17:40.719Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644165c72e1d7d7f1442ec91",
      },
      code: 419,
      origen: "coatzacoalcos",
      destino: "EL MAZATITO",
      fecha_creacion: {
        $date: "2023-04-20T16:18:15.863Z",
      },
      updated_at: {
        $date: "2023-04-20T16:18:15.863Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644165e42e1d7d7f1442ec95",
      },
      code: 204,
      origen: "coatzacoalcos",
      destino: "EL PORVENIR",
      fecha_creacion: {
        $date: "2023-04-20T16:18:44.418Z",
      },
      updated_at: {
        $date: "2023-04-20T16:18:44.418Z",
      },
      precio: 32,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644166142e1d7d7f1442ec99",
      },
      code: 421,
      origen: "coatzacoalcos",
      destino: "SAN MARTIN",
      fecha_creacion: {
        $date: "2023-04-20T16:19:32.542Z",
      },
      updated_at: {
        $date: "2023-04-20T16:19:32.542Z",
      },
      precio: 32,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644166402e1d7d7f1442ec9d",
      },
      code: 422,
      origen: "coatzacoalcos",
      destino: "EL BALANCIN",
      fecha_creacion: {
        $date: "2023-04-20T16:20:16.383Z",
      },
      updated_at: {
        $date: "2023-04-20T16:20:16.383Z",
      },
      precio: 32,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644166582e1d7d7f1442eca1",
      },
      code: 423,
      origen: "coatzacoalcos",
      destino: "LOS POZOS",
      fecha_creacion: {
        $date: "2023-04-20T16:20:40.914Z",
      },
      updated_at: {
        $date: "2023-04-20T16:20:40.914Z",
      },
      precio: 32,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644166772e1d7d7f1442eca5",
      },
      code: 424,
      origen: "coatzacoalcos",
      destino: "EL ENTRONQUE",
      fecha_creacion: {
        $date: "2023-04-20T16:21:11.483Z",
      },
      updated_at: {
        $date: "2023-04-20T16:21:11.483Z",
      },
      precio: 32,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644166902e1d7d7f1442eca9",
      },
      code: 425,
      origen: "coatzacoalcos",
      destino: "EL 34",
      fecha_creacion: {
        $date: "2023-04-20T16:21:36.366Z",
      },
      updated_at: {
        $date: "2023-04-20T16:21:36.366Z",
      },
      precio: 34,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644166ae2e1d7d7f1442ecad",
      },
      code: 524,
      origen: "coatzacoalcos",
      destino: "TLACUILOLAPAN",
      fecha_creacion: {
        $date: "2023-04-20T16:22:06.084Z",
      },
      updated_at: {
        $date: "2023-04-20T16:22:06.084Z",
      },
      precio: 34,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644166ca2e1d7d7f1442ecb1",
      },
      code: 426,
      origen: "coatzacoalcos",
      destino: "LOS GAVILANES",
      fecha_creacion: {
        $date: "2023-04-20T16:22:34.798Z",
      },
      updated_at: {
        $date: "2023-04-20T16:22:34.798Z",
      },
      precio: 34,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644166e62e1d7d7f1442ecb5",
      },
      code: 429,
      origen: "coatzacoalcos",
      destino: "CUICHAPA",
      fecha_creacion: {
        $date: "2023-04-20T16:23:02.259Z",
      },
      updated_at: {
        $date: "2023-04-20T16:23:02.259Z",
      },
      precio: 39,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644167072e1d7d7f1442ecb9",
      },
      code: 535,
      origen: "coatzacoalcos",
      destino: "SN MIGUEL IXH.",
      fecha_creacion: {
        $date: "2023-04-20T16:23:35.807Z",
      },
      updated_at: {
        $date: "2023-04-20T16:23:35.807Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644167232e1d7d7f1442ecbd",
      },
      code: 392,
      origen: "coatzacoalcos",
      destino: "PAJARITOS",
      fecha_creacion: {
        $date: "2023-04-20T16:24:03.960Z",
      },
      updated_at: {
        $date: "2023-04-20T16:24:03.960Z",
      },
      precio: 10,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644167822e1d7d7f1442ecc1",
      },
      code: 532,
      origen: "coatzacoalcos",
      destino: "DESV. TEXIS",
      fecha_creacion: {
        $date: "2023-04-20T16:25:38.257Z",
      },
      updated_at: {
        $date: "2023-04-20T15:49:16.909Z",
      },
      precio: 65,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644167a82e1d7d7f1442ecc5",
      },
      code: 539,
      origen: "coatzacoalcos",
      destino: "FCO. MADERO",
      fecha_creacion: {
        $date: "2023-04-20T16:26:16.661Z",
      },
      updated_at: {
        $date: "2023-04-20T16:40:57.258Z",
      },
      precio: 70,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644167cd2e1d7d7f1442ecc9",
      },
      code: 542,
      origen: "coatzacoalcos",
      destino: "BALN. LA CEIBA",
      fecha_creacion: {
        $date: "2023-04-20T16:26:53.675Z",
      },
      updated_at: {
        $date: "2023-04-20T16:41:15.997Z",
      },
      precio: 71,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644167e32e1d7d7f1442eccd",
      },
      code: 338,
      origen: "coatzacoalcos",
      destino: "NARANJTO",
      fecha_creacion: {
        $date: "2023-04-20T16:27:15.574Z",
      },
      updated_at: {
        $date: "2023-04-20T16:27:15.574Z",
      },
      precio: 33,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644167fb2e1d7d7f1442ecd1",
      },
      code: 231,
      origen: "coatzacoalcos",
      destino: "LA ICA",
      fecha_creacion: {
        $date: "2023-04-20T16:27:39.422Z",
      },
      updated_at: {
        $date: "2023-04-20T16:42:35.167Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644168592e1d7d7f1442ecd5",
      },
      code: 537,
      origen: "coatzacoalcos",
      destino: "CRUZ DE MILAGRO",
      fecha_creacion: {
        $date: "2023-04-20T16:29:13.793Z",
      },
      updated_at: {
        $date: "2023-04-20T16:29:13.793Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644168782e1d7d7f1442ecd9",
      },
      code: 349,
      origen: "coatzacoalcos",
      destino: "CERQUILLA",
      fecha_creacion: {
        $date: "2023-04-20T16:29:44.509Z",
      },
      updated_at: {
        $date: "2023-04-20T16:29:44.509Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441689b2e1d7d7f1442ecdd",
      },
      code: 350,
      origen: "coatzacoalcos",
      destino: "LA GRAVERA",
      fecha_creacion: {
        $date: "2023-04-20T16:30:19.550Z",
      },
      updated_at: {
        $date: "2023-04-20T16:30:19.550Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644168af2e1d7d7f1442ece1",
      },
      code: 351,
      origen: "coatzacoalcos",
      destino: "RANCHO NUEVO",
      fecha_creacion: {
        $date: "2023-04-20T16:30:39.648Z",
      },
      updated_at: {
        $date: "2023-04-20T16:30:39.648Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644168ca2e1d7d7f1442ece5",
      },
      code: 353,
      origen: "coatzacoalcos",
      destino: "D. SAN JUAN",
      fecha_creacion: {
        $date: "2023-04-20T16:31:06.045Z",
      },
      updated_at: {
        $date: "2023-04-20T16:31:06.045Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644168e12e1d7d7f1442ece9",
      },
      code: 355,
      origen: "coatzacoalcos",
      destino: "EL NARANJITO",
      fecha_creacion: {
        $date: "2023-04-20T16:31:29.950Z",
      },
      updated_at: {
        $date: "2023-04-20T16:31:29.950Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644168f42e1d7d7f1442eced",
      },
      code: 356,
      origen: "coatzacoalcos",
      destino: "LAS LIMAS",
      fecha_creacion: {
        $date: "2023-04-20T16:31:48.623Z",
      },
      updated_at: {
        $date: "2023-04-20T16:31:48.623Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644169142e1d7d7f1442ecf1",
      },
      code: 358,
      origen: "coatzacoalcos",
      destino: "CANDELARIA",
      fecha_creacion: {
        $date: "2023-04-20T16:32:20.715Z",
      },
      updated_at: {
        $date: "2023-04-20T16:41:01.495Z",
      },
      precio: 144,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644169322e1d7d7f1442ecf5",
      },
      code: 360,
      origen: "coatzacoalcos",
      destino: "DESV. LOS TIGRES",
      fecha_creacion: {
        $date: "2023-04-20T16:32:50.307Z",
      },
      updated_at: {
        $date: "2023-04-20T16:32:50.307Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441694c2e1d7d7f1442ecf9",
      },
      code: 534,
      origen: "coatzacoalcos",
      destino: "CASAS VIEJAS",
      fecha_creacion: {
        $date: "2023-04-20T16:33:16.774Z",
      },
      updated_at: {
        $date: "2023-04-20T16:33:16.774Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644169642e1d7d7f1442ecfd",
      },
      code: 361,
      origen: "coatzacoalcos",
      destino: "MILAGROS",
      fecha_creacion: {
        $date: "2023-04-20T16:33:40.143Z",
      },
      updated_at: {
        $date: "2023-04-20T16:33:40.143Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644169842e1d7d7f1442ed01",
      },
      code: 363,
      origen: "coatzacoalcos",
      destino: "DESV. RODRIGUEZ",
      fecha_creacion: {
        $date: "2023-04-20T16:34:12.825Z",
      },
      updated_at: {
        $date: "2023-04-20T16:34:12.825Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644169ab2e1d7d7f1442ed05",
      },
      code: 364,
      origen: "coatzacoalcos",
      destino: "DESV. RODRIGUEZ CLARA",
      fecha_creacion: {
        $date: "2023-04-20T16:34:51.788Z",
      },
      updated_at: {
        $date: "2023-04-20T16:34:51.788Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419b152e1d7d7f1442ed09",
      },
      code: 366,
      origen: "coatzacoalcos",
      destino: "DESV. ISLA",
      fecha_creacion: {
        $date: "2023-04-20T20:05:41.551Z",
      },
      updated_at: {
        $date: "2023-04-20T20:05:41.551Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419b2c2e1d7d7f1442ed0d",
      },
      code: 367,
      origen: "coatzacoalcos",
      destino: "RANCHO NUEVO",
      fecha_creacion: {
        $date: "2023-04-20T20:06:04.833Z",
      },
      updated_at: {
        $date: "2023-04-20T20:06:04.833Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419b532e1d7d7f1442ed11",
      },
      code: 368,
      origen: "coatzacoalcos",
      destino: "HUVERO",
      fecha_creacion: {
        $date: "2023-04-20T20:06:43.089Z",
      },
      updated_at: {
        $date: "2023-04-20T20:06:43.089Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419b652e1d7d7f1442ed15",
      },
      code: 370,
      origen: "coatzacoalcos",
      destino: "CD. ISLA",
      fecha_creacion: {
        $date: "2023-04-20T20:07:01.806Z",
      },
      updated_at: {
        $date: "2023-04-20T20:07:01.806Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419b772e1d7d7f1442ed19",
      },
      code: 371,
      origen: "coatzacoalcos",
      destino: "EL EJIDO",
      fecha_creacion: {
        $date: "2023-04-20T20:07:19.999Z",
      },
      updated_at: {
        $date: "2023-04-20T20:07:19.999Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419b962e1d7d7f1442ee19",
      },
      code: 533,
      origen: "coatzacoalcos",
      destino: "CUATESONA",
      fecha_creacion: {
        $date: "2023-04-20T20:07:50.651Z",
      },
      updated_at: {
        $date: "2023-04-20T20:07:50.651Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419bb22e1d7d7f1442ee93",
      },
      code: 376,
      origen: "coatzacoalcos",
      destino: "CURAZO",
      fecha_creacion: {
        $date: "2023-04-20T20:08:18.702Z",
      },
      updated_at: {
        $date: "2023-04-20T20:08:18.702Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419bc42e1d7d7f1442ef10",
      },
      code: 377,
      origen: "coatzacoalcos",
      destino: "VILLA AZUETA",
      fecha_creacion: {
        $date: "2023-04-20T20:08:36.310Z",
      },
      updated_at: {
        $date: "2023-04-20T20:08:36.311Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419bd72e1d7d7f1442ef14",
      },
      code: 538,
      origen: "coatzacoalcos",
      destino: "DOBLADERO",
      fecha_creacion: {
        $date: "2023-04-20T20:08:55.997Z",
      },
      updated_at: {
        $date: "2023-04-20T20:08:55.997Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419beb2e1d7d7f1442ef18",
      },
      code: 382,
      origen: "coatzacoalcos",
      destino: "EL CRUCERO",
      fecha_creacion: {
        $date: "2023-04-20T20:09:15.963Z",
      },
      updated_at: {
        $date: "2023-04-20T20:09:15.963Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419c032e1d7d7f1442ef1c",
      },
      code: 381,
      origen: "coatzacoalcos",
      destino: "DES. LINDA VISTA",
      fecha_creacion: {
        $date: "2023-04-20T20:09:39.560Z",
      },
      updated_at: {
        $date: "2023-04-20T20:09:39.560Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419c182e1d7d7f1442ef20",
      },
      code: 385,
      origen: "coatzacoalcos",
      destino: "ESPERANZA",
      fecha_creacion: {
        $date: "2023-04-20T20:10:00.923Z",
      },
      updated_at: {
        $date: "2023-04-20T20:10:00.923Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419c322e1d7d7f1442ef24",
      },
      code: 386,
      origen: "coatzacoalcos",
      destino: "ZABANETA",
      fecha_creacion: {
        $date: "2023-04-20T20:10:26.530Z",
      },
      updated_at: {
        $date: "2023-04-20T20:10:26.530Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419c472e1d7d7f1442ef2c",
      },
      code: 391,
      origen: "coatzacoalcos",
      destino: "LOMA BONITA",
      fecha_creacion: {
        $date: "2023-04-20T20:10:47.061Z",
      },
      updated_at: {
        $date: "2023-04-20T20:10:47.061Z",
      },
      precio: 11,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419ce12e1d7d7f1442ef36",
      },
      code: 11,
      origen: "coatzacoalcos",
      destino: "TIERRA BLANCA",
      fecha_creacion: {
        $date: "2023-04-20T20:13:21.209Z",
      },
      updated_at: {
        $date: "2023-04-20T15:46:20.652Z",
      },
      precio: 60,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419cf42e1d7d7f1442ef3e",
      },
      code: 12,
      origen: "coatzacoalcos",
      destino: "ZACATAL",
      fecha_creacion: {
        $date: "2023-04-20T20:13:40.734Z",
      },
      updated_at: {
        $date: "2023-04-20T15:46:41.295Z",
      },
      precio: 65,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419d042e1d7d7f1442ef42",
      },
      code: 13,
      origen: "coatzacoalcos",
      destino: "PROGRESO",
      fecha_creacion: {
        $date: "2023-04-20T20:13:56.455Z",
      },
      updated_at: {
        $date: "2023-04-20T15:47:08.321Z",
      },
      precio: 70,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419d152e1d7d7f1442ef4a",
      },
      code: 15,
      origen: "coatzacoalcos",
      destino: "SOCONUSCO",
      fecha_creacion: {
        $date: "2023-04-20T20:14:13.964Z",
      },
      updated_at: {
        $date: "2023-04-20T15:48:03.288Z",
      },
      precio: 73,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419d262e1d7d7f1442ef54",
      },
      code: 16,
      origen: "coatzacoalcos",
      destino: "ACAYUCAN",
      fecha_creacion: {
        $date: "2023-04-20T20:14:30.670Z",
      },
      updated_at: {
        $date: "2023-04-20T15:51:48.121Z",
      },
      precio: 75,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419d392e1d7d7f1442ef5c",
      },
      code: 17,
      origen: "coatzacoalcos",
      destino: "GASOLINERA",
      fecha_creacion: {
        $date: "2023-04-20T20:14:49.300Z",
      },
      updated_at: {
        $date: "2023-04-20T15:52:27.212Z",
      },
      precio: 77,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419d462e1d7d7f1442ef60",
      },
      code: 21,
      origen: "coatzacoalcos",
      destino: "APAXTA",
      fecha_creacion: {
        $date: "2023-04-20T20:15:02.931Z",
      },
      updated_at: {
        $date: "2023-04-20T15:56:00.280Z",
      },
      precio: 81,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419d5a2e1d7d7f1442ef68",
      },
      code: 22,
      origen: "coatzacoalcos",
      destino: "COMEJEN",
      fecha_creacion: {
        $date: "2023-04-20T20:15:22.539Z",
      },
      updated_at: {
        $date: "2023-04-20T15:56:22.052Z",
      },
      precio: 86,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419d6e2e1d7d7f1442ef6c",
      },
      code: 23,
      origen: "coatzacoalcos",
      destino: "IXTAGAPA",
      fecha_creacion: {
        $date: "2023-04-20T20:15:42.162Z",
      },
      updated_at: {
        $date: "2023-04-20T15:56:41.511Z",
      },
      precio: 86,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419d872e1d7d7f1442ef72",
      },
      code: 24,
      origen: "coatzacoalcos",
      destino: "SAN MIGUEL",
      fecha_creacion: {
        $date: "2023-04-20T20:16:07.796Z",
      },
      updated_at: {
        $date: "2023-04-20T15:57:05.717Z",
      },
      precio: 88,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419d9e2e1d7d7f1442ef7a",
      },
      code: 25,
      origen: "coatzacoalcos",
      destino: "COL. HIDALGO",
      fecha_creacion: {
        $date: "2023-04-20T20:16:30.333Z",
      },
      updated_at: {
        $date: "2023-04-20T15:57:33.237Z",
      },
      precio: 90,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419dae2e1d7d7f1442ef84",
      },
      code: 26,
      origen: "coatzacoalcos",
      destino: "VISTA HERMOSA",
      fecha_creacion: {
        $date: "2023-04-20T20:16:46.833Z",
      },
      updated_at: {
        $date: "2023-04-20T15:57:46.243Z",
      },
      precio: 97,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419dc02e1d7d7f1442ef88",
      },
      code: 27,
      origen: "coatzacoalcos",
      destino: "FINCA XALAPA",
      fecha_creacion: {
        $date: "2023-04-20T20:17:04.728Z",
      },
      updated_at: {
        $date: "2023-04-20T15:58:00.573Z",
      },
      precio: 99,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419dcd2e1d7d7f1442ef93",
      },
      code: 28,
      origen: "coatzacoalcos",
      destino: "LOS POLLOS",
      fecha_creacion: {
        $date: "2023-04-20T20:17:17.370Z",
      },
      updated_at: {
        $date: "2023-04-20T15:58:16.591Z",
      },
      precio: 100,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419ddc2e1d7d7f1442ef98",
      },
      code: 33,
      origen: "coatzacoalcos",
      destino: "CORRAL NUEVO",
      fecha_creacion: {
        $date: "2023-04-20T20:17:32.641Z",
      },
      updated_at: {
        $date: "2023-04-20T16:00:01.770Z",
      },
      precio: 109,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419ded2e1d7d7f1442f071",
      },
      code: 34,
      origen: "coatzacoalcos",
      destino: "LA GUADALUPE",
      fecha_creacion: {
        $date: "2023-04-20T20:17:49.152Z",
      },
      updated_at: {
        $date: "2023-04-20T16:00:29.428Z",
      },
      precio: 115,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419e162e1d7d7f1442f08f",
      },
      code: 35,
      origen: "coatzacoalcos",
      destino: "DESV. HUEYAPAN",
      fecha_creacion: {
        $date: "2023-04-20T20:18:30.806Z",
      },
      updated_at: {
        $date: "2023-04-20T16:01:23.218Z",
      },
      precio: 115,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419e2c2e1d7d7f1442f093",
      },
      code: 36,
      origen: "coatzacoalcos",
      destino: "DESV. SOCONUSCO",
      fecha_creacion: {
        $date: "2023-04-20T20:18:52.382Z",
      },
      updated_at: {
        $date: "2023-04-20T16:02:07.729Z",
      },
      precio: 115,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419e412e1d7d7f1442f097",
      },
      code: 37,
      origen: "coatzacoalcos",
      destino: "COVARRUBIAS",
      fecha_creacion: {
        $date: "2023-04-20T20:19:13.102Z",
      },
      updated_at: {
        $date: "2023-04-20T16:02:18.406Z",
      },
      precio: 119,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419e6b2e1d7d7f1442f09d",
      },
      code: 44,
      origen: "coatzacoalcos",
      destino: "ALTO LUCERO",
      fecha_creacion: {
        $date: "2023-04-20T20:19:55.673Z",
      },
      updated_at: {
        $date: "2023-04-20T16:05:27.155Z",
      },
      precio: 128,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419e7e2e1d7d7f1442f0a1",
      },
      code: 45,
      origen: "coatzacoalcos",
      destino: "BARROSA",
      fecha_creacion: {
        $date: "2023-04-20T20:20:14.239Z",
      },
      updated_at: {
        $date: "2023-04-20T16:05:44.446Z",
      },
      precio: 129,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419e8a2e1d7d7f1442f0a5",
      },
      code: 46,
      origen: "coatzacoalcos",
      destino: "LOS MANGOS",
      fecha_creacion: {
        $date: "2023-04-20T20:20:26.848Z",
      },
      updated_at: {
        $date: "2023-04-20T16:05:59.735Z",
      },
      precio: 134,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419eae2e1d7d7f1442f0a9",
      },
      code: 47,
      origen: "coatzacoalcos",
      destino: "SANTA ROSA",
      fecha_creacion: {
        $date: "2023-04-20T20:21:02.942Z",
      },
      updated_at: {
        $date: "2023-04-20T16:06:16.821Z",
      },
      precio: 140,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419ec22e1d7d7f1442f0ad",
      },
      code: 48,
      origen: "coatzacoalcos",
      destino: "ZAPOAPAN",
      fecha_creacion: {
        $date: "2023-04-20T20:21:22.464Z",
      },
      updated_at: {
        $date: "2023-04-20T16:06:59.396Z",
      },
      precio: 146,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419ee62e1d7d7f1442f0b1",
      },
      code: 536,
      origen: "coatzacoalcos",
      destino: "LA CANDELARIA",
      fecha_creacion: {
        $date: "2023-04-20T20:21:58.765Z",
      },
      updated_at: {
        $date: "2023-04-20T16:45:05.259Z",
      },
      precio: 144,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419ef92e1d7d7f1442f0b5",
      },
      code: 50,
      origen: "coatzacoalcos",
      destino: "LA VICTORIA",
      fecha_creacion: {
        $date: "2023-04-20T20:22:17.087Z",
      },
      updated_at: {
        $date: "2023-04-20T15:52:26.946Z",
      },
      precio: 157,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419f232e1d7d7f1442f0b9",
      },
      code: 51,
      origen: "coatzacoalcos",
      destino: "MACHACAPAN",
      fecha_creacion: {
        $date: "2023-04-20T20:22:59.590Z",
      },
      updated_at: {
        $date: "2023-04-20T15:52:43.525Z",
      },
      precio: 158,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419f332e1d7d7f1442f0bd",
      },
      code: 52,
      origen: "coatzacoalcos",
      destino: "CATEMACO",
      fecha_creacion: {
        $date: "2023-04-20T20:23:15.764Z",
      },
      updated_at: {
        $date: "2023-04-20T16:10:23.210Z",
      },
      precio: 160,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419f422e1d7d7f1442f0c1",
      },
      code: 53,
      origen: "coatzacoalcos",
      destino: "LAS GALERAS",
      fecha_creacion: {
        $date: "2023-04-20T20:23:30.029Z",
      },
      updated_at: {
        $date: "2023-04-20T16:10:37.057Z",
      },
      precio: 162,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419f5a2e1d7d7f1442f0c5",
      },
      code: 55,
      origen: "coatzacoalcos",
      destino: "MATACAPAN",
      fecha_creacion: {
        $date: "2023-04-20T20:23:54.324Z",
      },
      updated_at: {
        $date: "2023-04-20T16:12:24.847Z",
      },
      precio: 166,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419f6e2e1d7d7f1442f0c9",
      },
      code: 56,
      origen: "coatzacoalcos",
      destino: "SIHUAPAN",
      fecha_creacion: {
        $date: "2023-04-20T20:24:14.004Z",
      },
      updated_at: {
        $date: "2023-04-20T16:12:45.189Z",
      },
      precio: 167,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419f852e1d7d7f1442f0cd",
      },
      code: 58,
      origen: "coatzacoalcos",
      destino: "SAN ANDRES",
      fecha_creacion: {
        $date: "2023-04-20T20:24:37.286Z",
      },
      updated_at: {
        $date: "2023-04-20T16:13:45.358Z",
      },
      precio: 171,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419f9c2e1d7d7f1442f0d1",
      },
      code: 68,
      origen: "coatzacoalcos",
      destino: "SANTIAGO TUXTLA",
      fecha_creacion: {
        $date: "2023-04-20T20:25:00.213Z",
      },
      updated_at: {
        $date: "2023-04-20T15:01:23.649Z",
      },
      precio: 189,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419fb12e1d7d7f1442f0d5",
      },
      code: 74,
      origen: "coatzacoalcos",
      destino: "TAPALAPA",
      fecha_creacion: {
        $date: "2023-04-20T20:25:21.363Z",
      },
      updated_at: {
        $date: "2023-04-20T15:32:19.573Z",
      },
      precio: 201,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419fc12e1d7d7f1442f0d9",
      },
      code: 77,
      origen: "coatzacoalcos",
      destino: "TECOLAPAN",
      fecha_creacion: {
        $date: "2023-04-20T20:25:37.298Z",
      },
      updated_at: {
        $date: "2023-04-20T15:07:12.734Z",
      },
      precio: 204,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419fd12e1d7d7f1442f0dd",
      },
      code: 81,
      origen: "coatzacoalcos",
      destino: "TULA",
      fecha_creacion: {
        $date: "2023-04-20T20:25:53.260Z",
      },
      updated_at: {
        $date: "2023-04-20T15:09:55.748Z",
      },
      precio: 209,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419fe02e1d7d7f1442f0e1",
      },
      code: 82,
      origen: "coatzacoalcos",
      destino: "TROPICO",
      fecha_creacion: {
        $date: "2023-04-20T20:26:08.906Z",
      },
      updated_at: {
        $date: "2023-04-20T15:10:13.707Z",
      },
      precio: 210,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64419ff22e1d7d7f1442f0e5",
      },
      code: 89,
      origen: "coatzacoalcos",
      destino: "PUERTA NEGRA",
      fecha_creacion: {
        $date: "2023-04-20T20:26:26.058Z",
      },
      updated_at: {
        $date: "2023-04-20T15:13:31.705Z",
      },
      precio: 219,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441a00d2e1d7d7f1442f0e9",
      },
      code: 90,
      origen: "coatzacoalcos",
      destino: "A.R CABADA",
      fecha_creacion: {
        $date: "2023-04-20T20:26:53.522Z",
      },
      updated_at: {
        $date: "2023-04-20T15:15:46.154Z",
      },
      precio: 219,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441a01e2e1d7d7f1442f0ed",
      },
      code: 93,
      origen: "coatzacoalcos",
      destino: "CD. LERDO",
      fecha_creacion: {
        $date: "2023-04-20T20:27:10.341Z",
      },
      updated_at: {
        $date: "2023-04-20T15:16:35.683Z",
      },
      precio: 228,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441a02d2e1d7d7f1442f0f1",
      },
      code: 100,
      origen: "coatzacoalcos",
      destino: "PUERTO ESCONDIDO",
      fecha_creacion: {
        $date: "2023-04-20T20:27:25.565Z",
      },
      updated_at: {
        $date: "2023-04-20T15:31:49.760Z",
      },
      precio: 240,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441a03c2e1d7d7f1442f0f5",
      },
      code: 126,
      origen: "coatzacoalcos",
      destino: "ALVARADO",
      fecha_creacion: {
        $date: "2023-04-20T20:27:40.297Z",
      },
      updated_at: {
        $date: "2023-04-20T16:22:46.558Z",
      },
      precio: 262,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441a04e2e1d7d7f1442f0f9",
      },
      code: 134,
      origen: "coatzacoalcos",
      destino: "CAMARONERA",
      fecha_creacion: {
        $date: "2023-04-20T20:27:58.942Z",
      },
      updated_at: {
        $date: "2023-04-20T16:23:40.300Z",
      },
      precio: 286,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441a05e2e1d7d7f1442f0fd",
      },
      code: 140,
      origen: "coatzacoalcos",
      destino: "SALINAS",
      fecha_creacion: {
        $date: "2023-04-20T20:28:14.100Z",
      },
      updated_at: {
        $date: "2023-04-20T16:28:39.365Z",
      },
      precio: 293,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441a06a2e1d7d7f1442f101",
      },
      code: 146,
      origen: "coatzacoalcos",
      destino: "LA PIEDRA",
      fecha_creacion: {
        $date: "2023-04-20T20:28:26.907Z",
      },
      updated_at: {
        $date: "2023-04-20T16:31:23.913Z",
      },
      precio: 306,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441a07d2e1d7d7f1442f105",
      },
      code: 158,
      origen: "coatzacoalcos",
      destino: "LA LAGUNA",
      fecha_creacion: {
        $date: "2023-04-20T20:28:45.429Z",
      },
      updated_at: {
        $date: "2023-04-20T16:33:11.667Z",
      },
      precio: 315,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441a0a32e1d7d7f1442f109",
      },
      code: 166,
      origen: "coatzacoalcos",
      destino: "PASO DEL TORO ",
      fecha_creacion: {
        $date: "2023-04-20T20:29:23.234Z",
      },
      updated_at: {
        $date: "2023-04-20T16:34:25.499Z",
      },
      precio: 324,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441a0b12e1d7d7f1442f10d",
      },
      code: 170,
      origen: "coatzacoalcos",
      destino: "BOCA DEL RIO",
      fecha_creacion: {
        $date: "2023-04-20T20:29:37.603Z",
      },
      updated_at: {
        $date: "2023-04-20T16:34:46.923Z",
      },
      precio: 330,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441a0bf2e1d7d7f1442f111",
      },
      code: 177,
      origen: "coatzacoalcos",
      destino: "VERACRUZ",
      fecha_creacion: {
        $date: "2023-04-20T20:29:51.580Z",
      },
      updated_at: {
        $date: "2023-04-20T16:35:31.188Z",
      },
      precio: 346,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442d5c2f01e3c13c358308a",
      },
      code: 10,
      origen: "coatzacoalcos",
      destino: "MANGUITO",
      fecha_creacion: {
        $date: "2023-04-21T18:28:18.811Z",
      },
      updated_at: {
        $date: "2023-04-20T16:44:10.168Z",
      },
      precio: 59,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442da2bf01e3c13c35830b0",
      },
      code: 14,
      origen: "coatzacoalcos",
      destino: "EL MANGO",
      fecha_creacion: {
        $date: "2023-04-21T18:47:07.104Z",
      },
      updated_at: {
        $date: "2023-04-20T15:47:33.716Z",
      },
      precio: 71,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442da5cf01e3c13c35830b8",
      },
      code: 18,
      origen: "coatzacoalcos",
      destino: "ESPEJO",
      fecha_creacion: {
        $date: "2023-04-21T18:47:56.276Z",
      },
      updated_at: {
        $date: "2023-04-20T15:52:48.987Z",
      },
      precio: 77,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442da7ff01e3c13c35830c0",
      },
      code: 19,
      origen: "coatzacoalcos",
      destino: "FRIGORIFICO",
      fecha_creacion: {
        $date: "2023-04-21T18:48:31.861Z",
      },
      updated_at: {
        $date: "2023-04-20T15:55:28.784Z",
      },
      precio: 78,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442daa9f01e3c13c35830c8",
      },
      code: 20,
      origen: "coatzacoalcos",
      destino: "TECNICA",
      fecha_creacion: {
        $date: "2023-04-21T18:49:13.072Z",
      },
      updated_at: {
        $date: "2023-04-20T15:55:46.052Z",
      },
      precio: 79,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442db2ff01e3c13c35830d2",
      },
      code: 29,
      origen: "coatzacoalcos",
      destino: "NOVILLEROS",
      fecha_creacion: {
        $date: "2023-04-21T18:51:27.707Z",
      },
      updated_at: {
        $date: "2023-04-20T17:01:25.491Z",
      },
      precio: 101,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442db93f01e3c13c35830d6",
      },
      code: 30,
      origen: "coatzacoalcos",
      destino: "SAN MANUEL",
      fecha_creacion: {
        $date: "2023-04-21T18:53:07.670Z",
      },
      updated_at: {
        $date: "2023-04-20T15:58:39.738Z",
      },
      precio: 102,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442dbd5f01e3c13c35830de",
      },
      code: 31,
      origen: "coatzacoalcos",
      destino: "EL SUSPIRO",
      fecha_creacion: {
        $date: "2023-04-21T18:54:13.225Z",
      },
      updated_at: {
        $date: "2023-04-20T15:58:57.704Z",
      },
      precio: 102,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442dc08f01e3c13c35830e6",
      },
      code: 32,
      origen: "coatzacoalcos",
      destino: "LA GRAVERA",
      fecha_creacion: {
        $date: "2023-04-21T18:55:04.705Z",
      },
      updated_at: {
        $date: "2023-04-20T15:59:35.662Z",
      },
      precio: 105,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442dc7ff01e3c13c35830ec",
      },
      code: 38,
      origen: "coatzacoalcos",
      destino: "GASOLINERA",
      fecha_creacion: {
        $date: "2023-04-21T18:57:03.749Z",
      },
      updated_at: {
        $date: "2023-04-20T16:02:57.502Z",
      },
      precio: 120,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442dcc4f01e3c13c35830f4",
      },
      code: 40,
      origen: "coatzacoalcos",
      destino: "LA CORONA",
      fecha_creacion: {
        $date: "2023-04-21T18:58:12.279Z",
      },
      updated_at: {
        $date: "2023-04-20T16:03:31.066Z",
      },
      precio: 122,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442dcfaf01e3c13c35830fc",
      },
      code: 41,
      origen: "coatzacoalcos",
      destino: "CASA BLANCA",
      fecha_creacion: {
        $date: "2023-04-21T18:59:06.681Z",
      },
      updated_at: {
        $date: "2023-04-20T16:03:45.219Z",
      },
      precio: 124,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442dd38f01e3c13c3583104",
      },
      code: 42,
      origen: "coatzacoalcos",
      destino: "LA PALMA",
      fecha_creacion: {
        $date: "2023-04-21T19:00:08.465Z",
      },
      updated_at: {
        $date: "2023-04-20T16:04:28.061Z",
      },
      precio: 125,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442dd5af01e3c13c3583108",
      },
      code: 43,
      origen: "coatzacoalcos",
      destino: "REST. LA MADRINA",
      fecha_creacion: {
        $date: "2023-04-21T19:00:42.242Z",
      },
      updated_at: {
        $date: "2023-04-20T16:05:04.081Z",
      },
      precio: 127,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442dd94f01e3c13c358310c",
      },
      code: 49,
      origen: "coatzacoalcos",
      destino: "JUAN SECO",
      fecha_creacion: {
        $date: "2023-04-21T19:01:40.904Z",
      },
      updated_at: {
        $date: "2023-04-20T16:07:19.566Z",
      },
      precio: 148,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442ddebf01e3c13c3583116",
      },
      code: 54,
      origen: "coatzacoalcos",
      destino: "DESV. CHILAPA",
      fecha_creacion: {
        $date: "2023-04-21T19:03:07.930Z",
      },
      updated_at: {
        $date: "2023-04-20T16:10:54.107Z",
      },
      precio: 164,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442de10f01e3c13c3583124",
      },
      code: 57,
      origen: "coatzacoalcos",
      destino: "LA COLONIA",
      fecha_creacion: {
        $date: "2023-04-21T19:03:44.530Z",
      },
      updated_at: {
        $date: "2023-04-20T16:13:03.153Z",
      },
      precio: 171,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6442de2ff01e3c13c3583128",
      },
      code: 59,
      origen: "coatzacoalcos",
      destino: "KILOMETRO 3",
      fecha_creacion: {
        $date: "2023-04-21T19:04:15.716Z",
      },
      updated_at: {
        $date: "2023-04-20T15:48:07.721Z",
      },
      precio: 173,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644152e91c7d110393561ac3",
      },
      code: 60,
      origen: "coatzacoalcos",
      destino: "LOS PINOS",
      fecha_creacion: {
        $date: "2023-04-20T14:57:45.804Z",
      },
      updated_at: {
        $date: "2023-04-20T16:15:09.898Z",
      },
      precio: 176,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644153131c7d110393561acb",
      },
      code: 61,
      origen: "coatzacoalcos",
      destino: "TEXCALITA",
      fecha_creacion: {
        $date: "2023-04-20T14:58:27.490Z",
      },
      updated_at: {
        $date: "2023-04-20T17:04:10.503Z",
      },
      precio: 178,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644153231c7d110393561ae1",
      },
      code: 62,
      origen: "coatzacoalcos",
      destino: "POLVORIN",
      fecha_creacion: {
        $date: "2023-04-20T14:58:43.246Z",
      },
      updated_at: {
        $date: "2023-04-20T16:17:39.454Z",
      },
      precio: 181,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644153321c7d110393561ae5",
      },
      code: 63,
      origen: "coatzacoalcos",
      destino: "LA CEIBA",
      fecha_creacion: {
        $date: "2023-04-20T14:58:58.457Z",
      },
      updated_at: {
        $date: "2023-04-20T16:18:33.319Z",
      },
      precio: 181,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644153431c7d110393561ae9",
      },
      code: 64,
      origen: "coatzacoalcos",
      destino: "SAN MATIAS ",
      fecha_creacion: {
        $date: "2023-04-20T14:59:15.336Z",
      },
      updated_at: {
        $date: "2023-04-20T17:05:25.958Z",
      },
      precio: 185,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644153721c7d110393561af4",
      },
      code: 65,
      origen: "coatzacoalcos",
      destino: "SAN RAFAEL",
      fecha_creacion: {
        $date: "2023-04-20T15:00:02.565Z",
      },
      updated_at: {
        $date: "2023-04-20T15:00:16.774Z",
      },
      precio: 186,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644153831c7d110393561af8",
      },
      code: 66,
      origen: "coatzacoalcos",
      destino: "5 HERMANOS",
      fecha_creacion: {
        $date: "2023-04-20T15:00:19.751Z",
      },
      updated_at: {
        $date: "2023-04-20T15:00:45.060Z",
      },
      precio: 188,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644153951c7d110393561afc",
      },
      code: 67,
      origen: "coatzacoalcos",
      destino: "EL AMATE ",
      fecha_creacion: {
        $date: "2023-04-20T15:00:37.897Z",
      },
      updated_at: {
        $date: "2023-04-20T15:01:03.472Z",
      },
      precio: 188,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644153d11c7d110393561b06",
      },
      code: 69,
      origen: "coatzacoalcos",
      destino: "LOS CHANEQUES",
      fecha_creacion: {
        $date: "2023-04-20T15:01:37.441Z",
      },
      updated_at: {
        $date: "2023-04-20T15:02:12.481Z",
      },
      precio: 190,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644153f81c7d110393561b14",
      },
      code: 70,
      origen: "coatzacoalcos",
      destino: "EL PICAYO",
      fecha_creacion: {
        $date: "2023-04-20T15:02:16.572Z",
      },
      updated_at: {
        $date: "2023-04-20T15:44:38.494Z",
      },
      precio: 193,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441540c1c7d110393561b1a",
      },
      code: 71,
      origen: "coatzacoalcos",
      destino: "SAN RAFAEL",
      fecha_creacion: {
        $date: "2023-04-20T15:02:36.456Z",
      },
      updated_at: {
        $date: "2023-04-20T15:04:00.794Z",
      },
      precio: 195,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441541e1c7d110393561b1e",
      },
      code: 72,
      origen: "coatzacoalcos",
      destino: "SAN JOSE",
      fecha_creacion: {
        $date: "2023-04-20T15:02:54.664Z",
      },
      updated_at: {
        $date: "2023-04-20T15:04:21.222Z",
      },
      precio: 195,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441543b1c7d110393561b22",
      },
      code: 73,
      origen: "coatzacoalcos",
      destino: "POPOTEPELT",
      fecha_creacion: {
        $date: "2023-04-20T15:03:23.039Z",
      },
      updated_at: {
        $date: "2023-04-20T15:04:50.085Z",
      },
      precio: 197,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644154751c7d110393561b28",
      },
      code: 75,
      origen: "coatzacoalcos",
      destino: "FLOR DE EJIDO",
      fecha_creacion: {
        $date: "2023-04-20T15:04:21.612Z",
      },
      updated_at: {
        $date: "2023-04-20T15:05:39.155Z",
      },
      precio: 201,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441548a1c7d110393561b2c",
      },
      code: 76,
      origen: "coatzacoalcos",
      destino: "BANCO DE ARENA",
      fecha_creacion: {
        $date: "2023-04-20T15:04:42.021Z",
      },
      updated_at: {
        $date: "2023-04-20T15:06:03.811Z",
      },
      precio: 204,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644154b31c7d110393561b32",
      },
      code: 78,
      origen: "coatzacoalcos",
      destino: "PANCHO LOPEZ",
      fecha_creacion: {
        $date: "2023-04-20T15:05:23.387Z",
      },
      updated_at: {
        $date: "2023-04-20T15:08:11.249Z",
      },
      precio: 204,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644154d01c7d110393561b3a",
      },
      code: 79,
      origen: "coatzacoalcos",
      destino: "EL JOBO",
      fecha_creacion: {
        $date: "2023-04-20T15:05:52.503Z",
      },
      updated_at: {
        $date: "2023-04-20T15:07:53.170Z",
      },
      precio: 204,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644154e11c7d110393561b3e",
      },
      code: 80,
      origen: "coatzacoalcos",
      destino: "GRANJA GRANDE",
      fecha_creacion: {
        $date: "2023-04-20T15:06:09.983Z",
      },
      updated_at: {
        $date: "2023-04-20T15:08:35.897Z",
      },
      precio: 208,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644155151c7d110393561b44",
      },
      code: 83,
      origen: "coatzacoalcos",
      destino: "PECHAPA",
      fecha_creacion: {
        $date: "2023-04-20T15:07:01.058Z",
      },
      updated_at: {
        $date: "2023-04-20T15:10:26.767Z",
      },
      precio: 210,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441559f1c7d110393561b4e",
      },
      code: 84,
      origen: "coatzacoalcos",
      destino: "HNOS. VERGARA",
      fecha_creacion: {
        $date: "2023-04-20T15:09:19.114Z",
      },
      updated_at: {
        $date: "2023-04-20T15:10:44.776Z",
      },
      precio: 210,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644155b81c7d110393561b52",
      },
      code: 85,
      origen: "coatzacoalcos",
      destino: "LAS PALMAS",
      fecha_creacion: {
        $date: "2023-04-20T15:09:44.509Z",
      },
      updated_at: {
        $date: "2023-04-20T15:11:52.289Z",
      },
      precio: 214,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644155eb1c7d110393561b56",
      },
      code: 86,
      origen: "coatzacoalcos",
      destino: "LA PIEDRA",
      fecha_creacion: {
        $date: "2023-04-20T15:10:35.888Z",
      },
      updated_at: {
        $date: "2023-04-20T15:12:30.041Z",
      },
      precio: 214,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441561a1c7d110393561b5e",
      },
      code: 87,
      origen: "coatzacoalcos",
      destino: "SAN PABLO",
      fecha_creacion: {
        $date: "2023-04-20T15:11:22.579Z",
      },
      updated_at: {
        $date: "2023-04-20T15:12:47.422Z",
      },
      precio: 214,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644156481c7d110393561b62",
      },
      code: 88,
      origen: "coatzacoalcos",
      destino: "PIEDRA NEGRA",
      fecha_creacion: {
        $date: "2023-04-20T15:12:08.849Z",
      },
      updated_at: {
        $date: "2023-04-20T15:13:12.686Z",
      },
      precio: 219,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441567c1c7d110393561b68",
      },
      code: 91,
      origen: "coatzacoalcos",
      destino: "EL CARMEN",
      fecha_creacion: {
        $date: "2023-04-20T15:13:00.400Z",
      },
      updated_at: {
        $date: "2023-04-20T15:16:05.621Z",
      },
      precio: 220,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415115d3f4b55141c1e6e0",
      },
      code: 92,
      origen: "coatzacoalcos",
      destino: "SANTA TERESA",
      fecha_creacion: {
        $date: "2023-04-20T14:49:57.301Z",
      },
      updated_at: {
        $date: "2023-04-20T15:28:51.604Z",
      },
      precio: 222,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415149d3f4b55141c1e6e6",
      },
      code: 94,
      origen: "coatzacoalcos",
      destino: "PUNTA DE ARENA",
      fecha_creacion: {
        $date: "2023-04-20T14:50:49.651Z",
      },
      updated_at: {
        $date: "2023-04-20T15:17:00.341Z",
      },
      precio: 235,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415161d3f4b55141c1e6ea",
      },
      code: 95,
      origen: "coatzacoalcos",
      destino: "CIENEGA DEL S.",
      fecha_creacion: {
        $date: "2023-04-20T14:51:13.241Z",
      },
      updated_at: {
        $date: "2023-04-20T15:30:02.560Z",
      },
      precio: 238,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415170d3f4b55141c1e6ee",
      },
      code: 96,
      origen: "coatzacoalcos",
      destino: "LA GUADALUPE",
      fecha_creacion: {
        $date: "2023-04-20T14:51:28.682Z",
      },
      updated_at: {
        $date: "2023-04-20T15:18:20.683Z",
      },
      precio: 238,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415184d3f4b55141c1e6f2",
      },
      code: 97,
      origen: "coatzacoalcos",
      destino: "MONTE ALTO",
      fecha_creacion: {
        $date: "2023-04-20T14:51:48.530Z",
      },
      updated_at: {
        $date: "2023-04-20T15:18:37.139Z",
      },
      precio: 239,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415199d3f4b55141c1e6f6",
      },
      code: 98,
      origen: "coatzacoalcos",
      destino: "LA CRUZ",
      fecha_creacion: {
        $date: "2023-04-20T14:52:09.349Z",
      },
      updated_at: {
        $date: "2023-04-20T15:18:59.328Z",
      },
      precio: 239,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644151afd3f4b55141c1e6fe",
      },
      code: 99,
      origen: "coatzacoalcos",
      destino: "EL ROSARIO",
      fecha_creacion: {
        $date: "2023-04-20T14:52:31.662Z",
      },
      updated_at: {
        $date: "2023-04-20T15:19:34.074Z",
      },
      precio: 240,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644151dfd3f4b55141c1e704",
      },
      code: 101,
      origen: "coatzacoalcos",
      destino: "CAMPO VERDE",
      fecha_creacion: {
        $date: "2023-04-20T14:53:19.128Z",
      },
      updated_at: {
        $date: "2023-04-20T15:20:15.877Z",
      },
      precio: 240,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644151f3d3f4b55141c1e708",
      },
      code: 102,
      origen: "coatzacoalcos",
      destino: "GAMBOA",
      fecha_creacion: {
        $date: "2023-04-20T14:53:39.116Z",
      },
      updated_at: {
        $date: "2023-04-20T16:06:37.828Z",
      },
      precio: 243,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415209d3f4b55141c1e70c",
      },
      code: 103,
      origen: "coatzacoalcos",
      destino: "CASA VERDE",
      fecha_creacion: {
        $date: "2023-04-20T14:54:01.442Z",
      },
      updated_at: {
        $date: "2023-04-20T16:06:14.888Z",
      },
      precio: 243,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441521cd3f4b55141c1e710",
      },
      code: 104,
      origen: "coatzacoalcos",
      destino: "LA BANDERA",
      fecha_creacion: {
        $date: "2023-04-20T14:54:20.995Z",
      },
      updated_at: {
        $date: "2023-04-20T16:07:15.251Z",
      },
      precio: 245,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415237d3f4b55141c1e714",
      },
      code: 105,
      origen: "coatzacoalcos",
      destino: "EL PLATANAR",
      fecha_creacion: {
        $date: "2023-04-20T14:54:47.349Z",
      },
      updated_at: {
        $date: "2023-04-20T16:09:48.841Z",
      },
      precio: 245,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441524dd3f4b55141c1e718",
      },
      code: 106,
      origen: "coatzacoalcos",
      destino: "EL MORAL",
      fecha_creacion: {
        $date: "2023-04-20T14:55:09.783Z",
      },
      updated_at: {
        $date: "2023-04-20T16:10:06.635Z",
      },
      precio: 247,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415283d3f4b55141c1e720",
      },
      code: 107,
      origen: "coatzacoalcos",
      destino: "CONEJO ROJO",
      fecha_creacion: {
        $date: "2023-04-20T14:56:03.808Z",
      },
      updated_at: {
        $date: "2023-04-20T16:11:24.820Z",
      },
      precio: 247,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415295d3f4b55141c1e724",
      },
      code: 108,
      origen: "coatzacoalcos",
      destino: "CONEJO BLANCO",
      fecha_creacion: {
        $date: "2023-04-20T14:56:21.061Z",
      },
      updated_at: {
        $date: "2023-04-20T16:10:43.720Z",
      },
      precio: 248,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644152a8d3f4b55141c1e728",
      },
      code: 109,
      origen: "coatzacoalcos",
      destino: "COCUITE",
      fecha_creacion: {
        $date: "2023-04-20T14:56:40.911Z",
      },
      updated_at: {
        $date: "2023-04-20T16:11:46.192Z",
      },
      precio: 248,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644152b9d3f4b55141c1e72c",
      },
      code: 110,
      origen: "coatzacoalcos",
      destino: "DESV. TLACOT",
      fecha_creacion: {
        $date: "2023-04-20T14:56:57.850Z",
      },
      updated_at: {
        $date: "2023-04-20T15:25:55.459Z",
      },
      precio: 248,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644152ced3f4b55141c1e732",
      },
      code: 111,
      origen: "coatzacoalcos",
      destino: "CAMARON",
      fecha_creacion: {
        $date: "2023-04-20T14:57:18.022Z",
      },
      updated_at: {
        $date: "2023-04-20T16:12:28.926Z",
      },
      precio: 248,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644152e0d3f4b55141c1e73a",
      },
      code: 112,
      origen: "coatzacoalcos",
      destino: "PUNTA VERDE",
      fecha_creacion: {
        $date: "2023-04-20T14:57:36.623Z",
      },
      updated_at: {
        $date: "2023-04-20T16:14:20.102Z",
      },
      precio: 249,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644152f2d3f4b55141c1e742",
      },
      code: 113,
      origen: "coatzacoalcos",
      destino: "ALTA VISTA",
      fecha_creacion: {
        $date: "2023-04-20T14:57:54.919Z",
      },
      updated_at: {
        $date: "2023-04-20T16:14:51.178Z",
      },
      precio: 249,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415303d3f4b55141c1e748",
      },
      code: 114,
      origen: "coatzacoalcos",
      destino: "BUENA VISTA",
      fecha_creacion: {
        $date: "2023-04-20T14:58:11.159Z",
      },
      updated_at: {
        $date: "2023-04-20T16:15:09.781Z",
      },
      precio: 254,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441531bd3f4b55141c1e74d",
      },
      code: 115,
      origen: "coatzacoalcos",
      destino: "PUEBLO NUEVO",
      fecha_creacion: {
        $date: "2023-04-20T14:58:35.765Z",
      },
      updated_at: {
        $date: "2023-04-20T16:15:47.843Z",
      },
      precio: 254,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441532ad3f4b55141c1e751",
      },
      code: 116,
      origen: "coatzacoalcos",
      destino: "LA PLACA",
      fecha_creacion: {
        $date: "2023-04-20T14:58:50.619Z",
      },
      updated_at: {
        $date: "2023-04-20T16:16:09.410Z",
      },
      precio: 254,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441533fd3f4b55141c1e755",
      },
      code: 117,
      origen: "coatzacoalcos",
      destino: "PUERTO LOBO",
      fecha_creacion: {
        $date: "2023-04-20T14:59:11.234Z",
      },
      updated_at: {
        $date: "2023-04-20T16:16:44.936Z",
      },
      precio: 254,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415377d3f4b55141c1e75d",
      },
      code: 118,
      origen: "coatzacoalcos",
      destino: "LA NUEVA LUCHA ",
      fecha_creacion: {
        $date: "2023-04-20T15:00:07.029Z",
      },
      updated_at: {
        $date: "2023-04-20T15:17:33.839Z",
      },
      precio: 254,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644153b6d3f4b55141c1e765",
      },
      code: 119,
      origen: "coatzacoalcos",
      destino: "CHOCOTLA",
      fecha_creacion: {
        $date: "2023-04-20T15:01:10.979Z",
      },
      updated_at: {
        $date: "2023-04-20T16:17:51.414Z",
      },
      precio: 261,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644153c5d3f4b55141c1e769",
      },
      code: 120,
      origen: "coatzacoalcos",
      destino: "EL JOBO",
      fecha_creacion: {
        $date: "2023-04-20T15:01:25.309Z",
      },
      updated_at: {
        $date: "2023-04-20T16:18:11.883Z",
      },
      precio: 261,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644153ddd3f4b55141c1e76d",
      },
      code: 121,
      origen: "coatzacoalcos",
      destino: "LAS PLAMITAS 2",
      fecha_creacion: {
        $date: "2023-04-20T15:01:49.617Z",
      },
      updated_at: {
        $date: "2023-04-20T16:20:12.581Z",
      },
      precio: 262,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644153f1d3f4b55141c1e771",
      },
      code: 122,
      origen: "coatzacoalcos",
      destino: "LAS PLAMITAS 1",
      fecha_creacion: {
        $date: "2023-04-20T15:02:09.192Z",
      },
      updated_at: {
        $date: "2023-04-20T16:19:08.468Z",
      },
      precio: 262,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415404d3f4b55141c1e777",
      },
      code: 123,
      origen: "coatzacoalcos",
      destino: "EL CORTE",
      fecha_creacion: {
        $date: "2023-04-20T15:02:28.460Z",
      },
      updated_at: {
        $date: "2023-04-20T16:20:53.970Z",
      },
      precio: 262,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441541bd3f4b55141c1e77b",
      },
      code: 124,
      origen: "coatzacoalcos",
      destino: "EL TECOMATE",
      fecha_creacion: {
        $date: "2023-04-20T15:02:51.058Z",
      },
      updated_at: {
        $date: "2023-04-20T16:21:12.222Z",
      },
      precio: 262,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415433d3f4b55141c1e781",
      },
      code: 125,
      origen: "coatzacoalcos",
      destino: "CASETA",
      fecha_creacion: {
        $date: "2023-04-20T15:03:15.468Z",
      },
      updated_at: {
        $date: "2023-04-20T16:21:27.390Z",
      },
      precio: 262,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415457d3f4b55141c1e788",
      },
      code: 127,
      origen: "coatzacoalcos",
      destino: "PUERTA NEGRA ",
      fecha_creacion: {
        $date: "2023-04-20T15:03:51.412Z",
      },
      updated_at: {
        $date: "2023-04-20T17:07:43.363Z",
      },
      precio: 265,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441546ed3f4b55141c1e78c",
      },
      code: 128,
      origen: "coatzacoalcos",
      destino: "CAPRICHO",
      fecha_creacion: {
        $date: "2023-04-20T15:04:14.444Z",
      },
      updated_at: {
        $date: "2023-04-20T15:07:50.735Z",
      },
      precio: 268,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415499d3f4b55141c1e796",
      },
      code: 129,
      origen: "coatzacoalcos",
      destino: "PUNTA NEGRA",
      fecha_creacion: {
        $date: "2023-04-20T15:04:57.603Z",
      },
      updated_at: {
        $date: "2023-04-20T15:08:10.715Z",
      },
      precio: 274,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644154a5d3f4b55141c1e79a",
      },
      code: 130,
      origen: "coatzacoalcos",
      destino: "LOS COCOS",
      fecha_creacion: {
        $date: "2023-04-20T15:05:09.638Z",
      },
      updated_at: {
        $date: "2023-04-20T15:08:56.954Z",
      },
      precio: 274,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644154c3d3f4b55141c1e79e",
      },
      code: 131,
      origen: "coatzacoalcos",
      destino: "ARBOLILLO",
      fecha_creacion: {
        $date: "2023-04-20T15:05:39.595Z",
      },
      updated_at: {
        $date: "2023-04-20T16:23:04.952Z",
      },
      precio: 279,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644154d6d3f4b55141c1e7a2",
      },
      code: 132,
      origen: "coatzacoalcos",
      destino: "BUEN PAIS",
      fecha_creacion: {
        $date: "2023-04-20T15:05:58.109Z",
      },
      updated_at: {
        $date: "2023-04-20T16:23:21.552Z",
      },
      precio: 281,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415501d3f4b55141c1e7a8",
      },
      code: 133,
      origen: "coatzacoalcos",
      destino: "LA LUCHA",
      fecha_creacion: {
        $date: "2023-04-20T15:06:41.924Z",
      },
      updated_at: {
        $date: "2023-04-20T15:09:56.775Z",
      },
      precio: 281,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441553ed3f4b55141c1e7b4",
      },
      code: 135,
      origen: "coatzacoalcos",
      destino: "JUANA MARIA",
      fecha_creacion: {
        $date: "2023-04-20T15:07:42.875Z",
      },
      updated_at: {
        $date: "2023-04-20T15:10:26.873Z",
      },
      precio: 290,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415555d3f4b55141c1e7b8",
      },
      code: 136,
      origen: "coatzacoalcos",
      destino: "LA CONCHITA",
      fecha_creacion: {
        $date: "2023-04-20T15:08:05.596Z",
      },
      updated_at: {
        $date: "2023-04-20T15:10:52.193Z",
      },
      precio: 293,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415565d3f4b55141c1e7bc",
      },
      code: 137,
      origen: "coatzacoalcos",
      destino: "EL CANAL",
      fecha_creacion: {
        $date: "2023-04-20T15:08:21.483Z",
      },
      updated_at: {
        $date: "2023-04-20T15:11:19.301Z",
      },
      precio: 293,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415582d3f4b55141c1e7c0",
      },
      code: 138,
      origen: "coatzacoalcos",
      destino: "EL NANCHE",
      fecha_creacion: {
        $date: "2023-04-20T15:08:50.119Z",
      },
      updated_at: {
        $date: "2023-04-20T16:26:40.855Z",
      },
      precio: 293,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415593d3f4b55141c1e7c4",
      },
      code: 139,
      origen: "coatzacoalcos",
      destino: "PLAYA AZUL",
      fecha_creacion: {
        $date: "2023-04-20T15:09:07.723Z",
      },
      updated_at: {
        $date: "2023-04-20T16:26:11.343Z",
      },
      precio: 293,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644155cdd3f4b55141c1e7ca",
      },
      code: 141,
      origen: "coatzacoalcos",
      destino: "QTA.MA.LUISA",
      fecha_creacion: {
        $date: "2023-04-20T15:10:05.898Z",
      },
      updated_at: {
        $date: "2023-04-20T15:12:11.774Z",
      },
      precio: 295,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415601d3f4b55141c1e7d8",
      },
      code: 142,
      origen: "coatzacoalcos",
      destino: "DESV. LA PALMA",
      fecha_creacion: {
        $date: "2023-04-20T15:10:57.237Z",
      },
      updated_at: {
        $date: "2023-04-20T15:13:03.917Z",
      },
      precio: 295,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441561ad3f4b55141c1e7dd",
      },
      code: 143,
      origen: "coatzacoalcos",
      destino: "PUERTA DE BAYO",
      fecha_creacion: {
        $date: "2023-04-20T15:11:22.666Z",
      },
      updated_at: {
        $date: "2023-04-20T16:29:34.844Z",
      },
      precio: 301,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415642d3f4b55141c1e7ef",
      },
      code: 144,
      origen: "coatzacoalcos",
      destino: "DESV. MANDINGA",
      fecha_creacion: {
        $date: "2023-04-20T15:12:02.347Z",
      },
      updated_at: {
        $date: "2023-04-20T16:30:20.474Z",
      },
      precio: 301,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415652d3f4b55141c1e7f3",
      },
      code: 145,
      origen: "coatzacoalcos",
      destino: "SAN ANTONIO",
      fecha_creacion: {
        $date: "2023-04-20T15:12:18.775Z",
      },
      updated_at: {
        $date: "2023-04-20T15:13:49.088Z",
      },
      precio: 301,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415694d3f4b55141c1e7fe",
      },
      code: 147,
      origen: "coatzacoalcos",
      destino: "PUENTE PIEDRA ",
      fecha_creacion: {
        $date: "2023-04-20T15:13:24.355Z",
      },
      updated_at: {
        $date: "2023-04-20T15:14:44.153Z",
      },
      precio: 306,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644156a9d3f4b55141c1e802",
      },
      code: 148,
      origen: "coatzacoalcos",
      destino: "NUEVA VIDA",
      fecha_creacion: {
        $date: "2023-04-20T15:13:45.129Z",
      },
      updated_at: {
        $date: "2023-04-20T16:31:41.593Z",
      },
      precio: 306,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644156cdd3f4b55141c1e80c",
      },
      code: 149,
      origen: "coatzacoalcos",
      destino: "SAN MARTIN",
      fecha_creacion: {
        $date: "2023-04-20T15:14:21.716Z",
      },
      updated_at: {
        $date: "2023-04-20T15:15:31.325Z",
      },
      precio: 306,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644156e5d3f4b55141c1e810",
      },
      code: 150,
      origen: "coatzacoalcos",
      destino: "CHARRASQUEANDO",
      fecha_creacion: {
        $date: "2023-04-20T15:14:45.121Z",
      },
      updated_at: {
        $date: "2023-04-20T15:15:57.267Z",
      },
      precio: 307,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644156f7d3f4b55141c1e814",
      },
      code: 151,
      origen: "coatzacoalcos",
      destino: "EL CORRALITO",
      fecha_creacion: {
        $date: "2023-04-20T15:15:03.758Z",
      },
      updated_at: {
        $date: "2023-04-20T16:32:19.536Z",
      },
      precio: 307,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415708d3f4b55141c1e818",
      },
      code: 152,
      origen: "coatzacoalcos",
      destino: "EL DOCE",
      fecha_creacion: {
        $date: "2023-04-20T15:15:20.829Z",
      },
      updated_at: {
        $date: "2023-04-20T16:32:40.515Z",
      },
      precio: 307,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441571ad3f4b55141c1e81c",
      },
      code: 153,
      origen: "coatzacoalcos",
      destino: "EL CABALLO",
      fecha_creacion: {
        $date: "2023-04-20T15:15:38.545Z",
      },
      updated_at: {
        $date: "2023-04-20T17:09:27.224Z",
      },
      precio: 314,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415743d3f4b55141c1e820",
      },
      code: 154,
      origen: "coatzacoalcos",
      destino: "DESV. TLALIXCOYA",
      fecha_creacion: {
        $date: "2023-04-20T15:16:19.458Z",
      },
      updated_at: {
        $date: "2023-04-20T17:11:16.768Z",
      },
      precio: 314,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415756d3f4b55141c1e824",
      },
      code: 155,
      origen: "coatzacoalcos",
      destino: "PASO VAQUERO",
      fecha_creacion: {
        $date: "2023-04-20T15:16:38.581Z",
      },
      updated_at: {
        $date: "2023-04-20T17:11:50.381Z",
      },
      precio: 314,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441576fd3f4b55141c1e828",
      },
      code: 156,
      origen: "coatzacoalcos",
      destino: "CAMPESINO ",
      fecha_creacion: {
        $date: "2023-04-20T15:17:03.427Z",
      },
      updated_at: {
        $date: "2023-04-20T17:12:13.468Z",
      },
      precio: 314,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415786d3f4b55141c1e82c",
      },
      code: 157,
      origen: "coatzacoalcos",
      destino: "LA TARRAYA",
      fecha_creacion: {
        $date: "2023-04-20T15:17:26.326Z",
      },
      updated_at: {
        $date: "2023-04-20T17:13:00.797Z",
      },
      precio: 314,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644157abd3f4b55141c1e833",
      },
      code: 159,
      origen: "coatzacoalcos",
      destino: "LA BASCULA",
      fecha_creacion: {
        $date: "2023-04-20T15:18:03.280Z",
      },
      updated_at: {
        $date: "2023-04-20T17:13:21.071Z",
      },
      precio: 314,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644157c1d3f4b55141c1e83b",
      },
      code: 160,
      origen: "coatzacoalcos",
      destino: "LA UNION ",
      fecha_creacion: {
        $date: "2023-04-20T15:18:25.497Z",
      },
      updated_at: {
        $date: "2023-04-20T17:16:31.959Z",
      },
      precio: 319,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644157d2d3f4b55141c1e83f",
      },
      code: 161,
      origen: "coatzacoalcos",
      destino: "SALAZAR",
      fecha_creacion: {
        $date: "2023-04-20T15:18:42.138Z",
      },
      updated_at: {
        $date: "2023-04-20T17:16:47.122Z",
      },
      precio: 319,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644157e8d3f4b55141c1e844",
      },
      code: 162,
      origen: "coatzacoalcos",
      destino: "DESV. LOS ROBLES",
      fecha_creacion: {
        $date: "2023-04-20T15:19:04.058Z",
      },
      updated_at: {
        $date: "2023-04-20T16:33:51.075Z",
      },
      precio: 320,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415804d3f4b55141c1e848",
      },
      code: 163,
      origen: "coatzacoalcos",
      destino: "MANANTIAL",
      fecha_creacion: {
        $date: "2023-04-20T15:19:32.077Z",
      },
      updated_at: {
        $date: "2023-04-20T17:18:55.333Z",
      },
      precio: 324,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415826d3f4b55141c1e84c",
      },
      code: 164,
      origen: "coatzacoalcos",
      destino: "LA GLORIA",
      fecha_creacion: {
        $date: "2023-04-20T15:20:06.107Z",
      },
      updated_at: {
        $date: "2023-04-20T17:19:18.846Z",
      },
      precio: 324,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415839d3f4b55141c1e850",
      },
      code: 165,
      origen: "coatzacoalcos",
      destino: "DESV. ALVARADO",
      fecha_creacion: {
        $date: "2023-04-20T15:20:25.728Z",
      },
      updated_at: {
        $date: "2023-04-20T17:19:36.375Z",
      },
      precio: 324,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441585ed3f4b55141c1e856",
      },
      code: 167,
      origen: "coatzacoalcos",
      destino: "DOS BOCAS",
      fecha_creacion: {
        $date: "2023-04-20T15:21:02.476Z",
      },
      updated_at: {
        $date: "2023-04-20T17:21:59.992Z",
      },
      precio: 325,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441586ed3f4b55141c1e85a",
      },
      code: 168,
      origen: "coatzacoalcos",
      destino: "PASO COLORADO",
      fecha_creacion: {
        $date: "2023-04-20T15:21:18.634Z",
      },
      updated_at: {
        $date: "2023-04-20T17:22:20.932Z",
      },
      precio: 326,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415887d3f4b55141c1e85e",
      },
      code: 169,
      origen: "coatzacoalcos",
      destino: "NOVILLERO",
      fecha_creacion: {
        $date: "2023-04-20T15:21:43.215Z",
      },
      updated_at: {
        $date: "2023-04-20T17:22:43.035Z",
      },
      precio: 326,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644158b9d3f4b55141c1e864",
      },
      code: 171,
      origen: "coatzacoalcos",
      destino: "EL MORRO",
      fecha_creacion: {
        $date: "2023-04-20T15:22:33.903Z",
      },
      updated_at: {
        $date: "2023-04-20T16:35:45.444Z",
      },
      precio: 335,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644158d0d3f4b55141c1e868",
      },
      code: 172,
      origen: "coatzacoalcos",
      destino: "LOS COCOS",
      fecha_creacion: {
        $date: "2023-04-20T15:22:56.435Z",
      },
      updated_at: {
        $date: "2023-04-20T16:39:50.977Z",
      },
      precio: 335,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644158e5d3f4b55141c1e86c",
      },
      code: 173,
      origen: "coatzacoalcos",
      destino: "MOCAMBO",
      fecha_creacion: {
        $date: "2023-04-20T15:23:17.041Z",
      },
      updated_at: {
        $date: "2023-04-20T16:39:19.772Z",
      },
      precio: 336,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415903d3f4b55141c1e870",
      },
      code: 174,
      origen: "coatzacoalcos",
      destino: "YLANG YLANG ",
      fecha_creacion: {
        $date: "2023-04-20T15:23:47.052Z",
      },
      updated_at: {
        $date: "2023-04-20T17:23:04.490Z",
      },
      precio: 334,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415917d3f4b55141c1e874",
      },
      code: 175,
      origen: "coatzacoalcos",
      destino: "LAS PALMITAS",
      fecha_creacion: {
        $date: "2023-04-20T15:24:07.206Z",
      },
      updated_at: {
        $date: "2023-04-20T16:40:44.387Z",
      },
      precio: 337,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "6441592bd3f4b55141c1e878",
      },
      code: 176,
      origen: "coatzacoalcos",
      destino: "BOTICARIA",
      fecha_creacion: {
        $date: "2023-04-20T15:24:27.544Z",
      },
      updated_at: {
        $date: "2023-04-20T16:40:27.825Z",
      },
      precio: 342,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "644159e612c0fe3727db6ad9",
      },
      code: 1,
      origen: "coatzacoalcos",
      destino: "LAS MATAS",
      fecha_creacion: {
        $date: "2023-04-20T15:27:34.011Z",
      },
      updated_at: {
        $date: "2023-04-20T15:37:50.530Z",
      },
      precio: 28,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415a0312c0fe3727db6ae5",
      },
      code: 2,
      origen: "coatzacoalcos",
      destino: "CONGRESO",
      fecha_creacion: {
        $date: "2023-04-20T15:28:03.443Z",
      },
      updated_at: {
        $date: "2023-04-20T15:37:20.267Z",
      },
      precio: 28,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415a1412c0fe3727db6ae9",
      },
      code: 3,
      origen: "coatzacoalcos",
      destino: "MINATITLAN",
      fecha_creacion: {
        $date: "2023-04-20T15:28:20.752Z",
      },
      updated_at: {
        $date: "2023-04-20T15:38:22.247Z",
      },
      precio: 29,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415a2d12c0fe3727db6af0",
      },
      code: 4,
      origen: "coatzacoalcos",
      destino: "J. ALDANA",
      fecha_creacion: {
        $date: "2023-04-20T15:28:45.141Z",
      },
      updated_at: {
        $date: "2023-04-20T15:42:15.252Z",
      },
      precio: 38,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415a7612c0fe3727db6af4",
      },
      code: 5,
      origen: "coatzacoalcos",
      destino: "COSOLEACAQUE",
      fecha_creacion: {
        $date: "2023-04-20T15:29:58.042Z",
      },
      updated_at: {
        $date: "2023-04-20T15:39:46.656Z",
      },
      precio: 39,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415a8712c0fe3727db6af8",
      },
      code: 6,
      origen: "coatzacoalcos",
      destino: "DESV. OTEAPAN",
      fecha_creacion: {
        $date: "2023-04-20T15:30:15.691Z",
      },
      updated_at: {
        $date: "2023-04-20T15:42:46.240Z",
      },
      precio: 40,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415a9612c0fe3727db6afc",
      },
      code: 7,
      origen: "coatzacoalcos",
      destino: "CAMINO VERDE",
      fecha_creacion: {
        $date: "2023-04-20T15:30:30.794Z",
      },
      updated_at: {
        $date: "2023-04-20T15:43:05.626Z",
      },
      precio: 45,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415aa712c0fe3727db6b00",
      },
      code: 8,
      origen: "coatzacoalcos",
      destino: "JALTIPAN",
      fecha_creacion: {
        $date: "2023-04-20T15:30:47.226Z",
      },
      updated_at: {
        $date: "2023-04-20T15:44:18.712Z",
      },
      precio: 47,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415ab912c0fe3727db6b0b",
      },
      code: 9,
      origen: "coatzacoalcos",
      destino: "GASOLINERA",
      fecha_creacion: {
        $date: "2023-04-20T15:31:05.196Z",
      },
      updated_at: {
        $date: "2023-04-20T15:45:08.324Z",
      },
      precio: 55,
      habilitado: 1,
      __v: 0,
    },
    {
      _id: {
        $oid: "64415b3b12c0fe3727db6b11",
      },
      code: 1000,
      origen: "coatzacoalcos",
      destino: "PARADA MINIMA",
      fecha_creacion: {
        $date: "2023-04-20T15:33:15.140Z",
      },
      updated_at: {
        $date: "2023-04-20T15:33:15.140Z",
      },
      precio: 10,
      habilitado: 1,
      __v: 0,
    },
  ];
  for (const objeto of objetosJson) {
    const { precio: precio, code: code, destino: destino } = objeto;
    // Crear un nuevo array con los valores y agregarlo a arrayReact
    const nuevoArray = { precio: precio, code: code, destino: destino };
    arrayReact.push(nuevoArray);
    if (newBoleto.code === code) {
      newBoleto.destino = destino;
      newBoleto.precio = precio;
    }
  }
  let total = newBoleto.precio;
  if (newBoleto.descuento === 1) {
    let total_de_venta = total;
    let total_de_venta_model = total;
    total_de_venta_model =
      Math.ceil(total_de_venta_model) * newBoleto.num_boleto;
    newBoleto.totalventa = Math.ceil(total_de_venta);
    newBoleto.totalventamodel = Math.ceil(total_de_venta_model);
    newBoleto.num_boletos_model = newBoleto.num_boleto;
    newBoleto.total = total;
  } else {
    let total_de_venta = total - total * (newBoleto.descuento / 100);
    let total_de_venta_model = total - total * (newBoleto.descuento / 100);
    total_de_venta_model =
      Math.ceil(total_de_venta_model) * newBoleto.num_boleto;
    newBoleto.totalventa = Math.ceil(total_de_venta);
    newBoleto.totalventamodel = Math.ceil(total_de_venta_model);
    newBoleto.num_boletos_model = newBoleto.num_boleto;
    newBoleto.total = total;
  }
  // devolver la variable modificada
  return { ...newBoleto}; // devolvemos un nuevo objeto con la propiedad "total" actualizada
};
