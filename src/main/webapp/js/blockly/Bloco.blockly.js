window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Bloco = window.blockly.js.blockly.Bloco || {};

/**
 * Bloco
 */
window.blockly.js.blockly.Bloco.Executar = function() {

  return this.cronapi.json.createObjectFromString('[\n    {\n        \"id\": 4,\n        \"contato\": 2,\n        \"titulo\": \"Bowling tournament\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-09T21' +
 ':00:00.000Z\",\n        \"dataFim\": \"2020-05-10T00:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia' +
 '\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 5,\n        \"contato\": 2,\n        \"titulo\": \"Take the dog to the vet\",\n        \"descricao\": \"\",\n        \"' +
 'fusoInicio\": null,\n        \"dataInicio\": \"2020-05-10T07:00:00.000Z\",\n        \"dataFim\": \"2020-05-10T08:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n     ' +
 '   \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 6,\n        \"contato\": 2,\n        \"titulo\": \"Call Cha' +
 'rlie about the project\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-11T11:30:00.000Z\",\n        \"dataFim\": \"2020-05-11T13:00:00.000Z\",\n     ' +
 '   \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        ' +
 '\"id\": 7,\n        \"contato\": 3,\n        \"titulo\": \"Meeting with Alex\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-12T11:00:00.000Z\",\n   ' +
 '     \"dataFim\": \"2020-05-12T12:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        ' +
 '\"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 9,\n        \"contato\": 2,\n        \"titulo\": \"Alex\'s Birthday\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n     ' +
 '   \"dataInicio\": \"2020-05-14T02:00:00.000Z\",\n        \"dataFim\": \"2020-05-14T02:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null' +
 ',\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": true\n    },\n    {\n        \"id\": 12,\n        \"contato\": 2,\n        \"titulo\": \"Car Service\",\n        \"descrica' +
 'o\": \"Might come to work later!\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-24T08:30:00.000Z\",\n        \"dataFim\": \"2020-05-24T09:30:00.000Z\",\n        \"fusoFim\": null' +
 ',\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 14,\n       ' +
 ' \"contato\": 3,\n        \"RoomID\": 2,\n        \"titulo\": \"Replace the printer on the 1st floor\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-' +
 '24T10:00:00.000Z\",\n        \"dataFim\": \"2020-05-24T11:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorr' +
 'encia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 15,\n        \"contato\": 1,\n        \"titulo\": \"AttdataFiming HR Conference\",\n        \"descricao\": \"\",\n' +
 '        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-25T00:00:00.000Z\",\n        \"dataFim\": \"2020-05-26T00:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": nu' +
 'll,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": true\n    },\n    {\n        \"id\": 16,\n        \"contato\": 1,\n        \"titulo\": ' +
 '\"Business Lunch with Gregory Watkins\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-25T12:00:00.000Z\",\n        \"dataFim\": \"2020-05-25T13:00:00' +
 '.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n' +
 '    {\n        \"id\": 17,\n        \"contato\": 1,\n        \"titulo\": \"Breakfast with CFO and COO\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05' +
 '-27T08:30:00.000Z\",\n        \"dataFim\": \"2020-05-27T09:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecor' +
 'rencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 18,\n        \"contato\": 1,\n        \"titulo\": \"Job Interview - Mathew Stevens\",\n        \"descricao\": \"J' +
 'unior Researcher\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-27T10:00:00.000Z\",\n        \"dataFim\": \"2020-05-27T11:00:00.000Z\",\n        \"fusoFim\": null,\n        \"reg' +
 'raDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 19,\n        \"contato\": 1,' +
 '\n        \"titulo\": \"Review CVs with Tim\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-27T11:00:00.000Z\",\n        \"dataFim\": \"2020-05-27T11' +
 ':30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n  ' +
 '  },\n    {\n        \"id\": 20,\n        \"contato\": 1,\n        \"titulo\": \"Lunch with Monica\",\n        \"descricao\": \"Discuss the Employee handbook\",\n        \"fusoInicio\": null,\n       ' +
 ' \"dataInicio\": \"2020-05-27T12:00:00.000Z\",\n        \"dataFim\": \"2020-05-27T13:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n' +
 '        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 21,\n        \"contato\": 1,\n        \"titulo\": \"Job Interview - John Stewart\",\n   ' +
 '     \"descricao\": \"Accountant\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-27T14:00:00.000Z\",\n        \"dataFim\": \"2020-05-27T15:00:00.000Z\",\n        \"fusoFim\": null' +
 ',\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 22,\n       ' +
 ' \"contato\": 1,\n        \"titulo\": \"Job Interview - Mary Smith\",\n        \"descricao\": \"Accountant\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-27T15:30:00.000Z\",\n   ' +
 '     \"dataFim\": \"2020-05-27T16:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        ' +
 '\"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 24,\n        \"contato\": 3,\n        \"titulo\": \"Register new Access Cards\",\n        \"descricao\": \"\",\n        \"fusoInicio\": nu' +
 'll,\n        \"dataInicio\": \"2020-05-24T12:00:00.000Z\",\n        \"dataFim\": \"2020-05-24T12:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrencia' +
 'Id\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 25,\n        \"contato\": 1,\n        \"titulo\": \"HR Lecture\",\n        ' +
 '\"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-04T19:00:00.000Z\",\n        \"dataFim\": \"2020-05-04T21:00:00.000Z\",\n        \"fusoFim\": null,\n        \"re' +
 'graDeRecorrencia\": \"FREQ=WEEKLY;BYDAY=TU,TH\",\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 26,\n' +
 '        \"contato\": 1,\n        \"titulo\": \"Dentist\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-28T08:00:00.000Z\",\n        \"dataFim\": \"20' +
 '20-05-28T09:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\"' +
 ': false\n    },\n    {\n        \"id\": 27,\n        \"contato\": 1,\n        \"titulo\": \"Job Interview - Laura Bailey\",\n        \"descricao\": \"Helpdesk\",\n        \"fusoInicio\": null,\n      ' +
 '  \"dataInicio\": \"2020-05-28T09:30:00.000Z\",\n        \"dataFim\": \"2020-05-28T10:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,' +
 '\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 28,\n        \"contato\": 1,\n        \"titulo\": \"Job Interview - Jenny Baxter\",\n ' +
 '       \"descricao\": \"Helpdesk\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-28T11:00:00.000Z\",\n        \"dataFim\": \"2020-05-28T12:00:00.000Z\",\n        \"fusoFim\": null' +
 ',\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 31,\n       ' +
 ' \"contato\": 1,\n        \"titulo\": \"Team building prep tasks\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-28T14:00:00.000Z\",\n        \"dataF' +
 'im\": \"2020-05-28T17:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDi' +
 'aInteiro\": false\n    },\n    {\n        \"id\": 32,\n        \"contato\": 1,\n        \"titulo\": \"Job Interview - Bernard Atkins\",\n        \"descricao\": \"Helpdesk\",\n        \"fusoInicio\": n' +
 'ull,\n        \"dataInicio\": \"2020-05-24T13:30:00.000Z\",\n        \"dataFim\": \"2020-05-24T14:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenci' +
 'aId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 34,\n        \"contato\": 1,\n        \"titulo\": \"Review Job Application' +
 's\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-24T15:00:00.000Z\",\n        \"dataFim\": \"2020-05-24T17:30:00.000Z\",\n        \"fusoFim\": null,' +
 '\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 35,\n        ' +
 '\"contato\": 1,\n        \"titulo\": \"Grand Canyon tour\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-23T00:00:00.000Z\",\n        \"dataFim\": \"' +
 '2020-05-23T00:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro' +
 '\": true\n    },\n    {\n        \"id\": 40,\n        \"contato\": 3,\n        \"titulo\": \"Install new laptops in conference rooms\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n  ' +
 '      \"dataInicio\": \"2020-05-24T13:30:00.000Z\",\n        \"dataFim\": \"2020-05-24T18:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": n' +
 'ull,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 66,\n        \"contato\": 3,\n        \"titulo\": \"Bob\'s Birthday\",\n        \"' +
 'descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-29T08:00:00.000Z\",\n        \"dataFim\": \"2020-05-29T06:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regr' +
 'aDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": true\n    },\n    {\n        \"id\": 68,\n        \"contato\": 1,\n' +
 '        \"RoomID\": 2,\n        \"titulo\": \"Breakfast with Tom\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-24T08:30:00.000Z\",\n        \"dataF' +
 'im\": \"2020-05-24T09:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDi' +
 'aInteiro\": false\n    },\n    {\n        \"id\": 69,\n        \"contato\": 2,\n        \"titulo\": \"Team planning meeting\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"d' +
 'ataInicio\": \"2020-05-24T10:00:00.000Z\",\n        \"dataFim\": \"2020-05-24T12:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n   ' +
 '     \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 70,\n        \"contato\": 2,\n        \"titulo\": \"Support Phone Call\",\n        \"descri' +
 'cao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-24T16:00:00.000Z\",\n        \"dataFim\": \"2020-05-24T16:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRec' +
 'orrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 71,\n        \"contato\": 2,\n     ' +
 '   \"titulo\": \"Business breakfast with Caroline\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-25T09:00:00.000Z\",\n        \"dataFim\": \"2020-05' +
 '-25T10:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": fal' +
 'se\n    },\n    {\n        \"id\": 72,\n        \"contato\": 2,\n        \"titulo\": \"Discuss preojects\' deadlines\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInic' +
 'io\": \"2020-05-25T11:00:00.000Z\",\n        \"dataFim\": \"2020-05-25T11:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"' +
 'excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 73,\n        \"contato\": 2,\n        \"titulo\": \"Support Meeting\",\n        \"descricao\": \"\"' +
 ',\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-25T15:00:00.000Z\",\n        \"dataFim\": \"2020-05-25T16:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\":' +
 ' null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 74,\n        \"contato\": 2,\n        \"titulo' +
 '\": \"Dine with Mathew\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-25T18:30:00.000Z\",\n        \"dataFim\": \"2020-05-25T20:00:00.000Z\",\n     ' +
 '   \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        ' +
 '\"id\": 79,\n        \"contato\": 2,\n        \"titulo\": \"Banking\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-26T09:00:00.000Z\",\n        \"da' +
 'taFim\": \"2020-05-26T10:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoD' +
 'eDiaInteiro\": false\n    },\n    {\n        \"id\": 80,\n        \"contato\": 3,\n        \"titulo\": \"Software updates\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dat' +
 'aInicio\": \"2020-05-25T10:00:00.000Z\",\n        \"dataFim\": \"2020-05-25T12:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n     ' +
 '   \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 81,\n        \"contato\": 3,\n        \"titulo\": \"UPS maintenance\",\n        \"descricao\"' +
 ': \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-25T16:30:00.000Z\",\n        \"dataFim\": \"2020-05-25T18:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorren' +
 'cia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 82,\n        \"contato\": 2,\n        \"' +
 'titulo\": \"Support Call\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-26T11:30:00.000Z\",\n        \"dataFim\": \"2020-05-26T12:00:00.000Z\",\n   ' +
 '     \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n      ' +
 '  \"id\": 83,\n        \"contato\": 3,\n        \"titulo\": \"Phone Sync with NY office \",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-26T13:30:00.' +
 '000Z\",\n        \"dataFim\": \"2020-05-26T14:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": nul' +
 'l,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 84,\n        \"contato\": 3,\n        \"titulo\": \"Phone Sync with Boston Office\",\n        \"descricao\": \"\",\n        \"' +
 'fusoInicio\": null,\n        \"dataInicio\": \"2020-05-26T15:00:00.000Z\",\n        \"dataFim\": \"2020-05-26T16:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n     ' +
 '   \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 85,\n        \"contato\": 3,\n        \"titulo\": \"Server ' +
 'maintenance\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-26T18:30:00.000Z\",\n        \"dataFim\": \"2020-05-26T21:30:00.000Z\",\n        \"fusoFi' +
 'm\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 86,' +
 '\n        \"contato\": 2,\n        \"titulo\": \"Status meeting\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-28T13:30:00.000Z\",\n        \"dataFi' +
 'm\": \"2020-05-28T15:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDia' +
 'Inteiro\": false\n    },\n    {\n        \"id\": 87,\n        \"contato\": 3,\n        \"titulo\": \"Helpdesk status meeting\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"' +
 'dataInicio\": \"2020-05-27T10:30:00.000Z\",\n        \"dataFim\": \"2020-05-27T11:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n  ' +
 '      \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 88,\n        \"contato\": 2,\n        \"titulo\": \"Business Lunch\",\n        \"descricao' +
 '\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-27T12:00:00.000Z\",\n        \"dataFim\": \"2020-05-27T13:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorr' +
 'encia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 89,\n        \"contato\": 3,\n        ' +
 '\"titulo\": \"Employee database update\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-27T14:00:00.000Z\",\n        \"dataFim\": \"2020-05-27T15:30:0' +
 '0.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n' +
 '    {\n        \"id\": 90,\n        \"contato\": 3,\n        \"titulo\": \"Website upload\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-27T07:30:00' +
 '.000Z\",\n        \"dataFim\": \"2020-05-27T08:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": nu' +
 'll,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 91,\n        \"contato\": 2,\n        \"titulo\": \"Meeting with marketing guys\",\n        \"descricao\": \"\",\n        \"f' +
 'usoInicio\": null,\n        \"dataInicio\": \"2020-05-27T17:00:00.000Z\",\n        \"dataFim\": \"2020-05-27T18:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n      ' +
 '  \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 92,\n        \"contato\": 3,\n        \"titulo\": \"Meeting ' +
 'with Internet provider\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-28T10:30:00.000Z\",\n        \"dataFim\": \"2020-05-28T11:30:00.000Z\",\n     ' +
 '   \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        ' +
 '\"id\": 93,\n        \"contato\": 3,\n        \"titulo\": \"Bob\'s Birthday Party\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-29T20:00:00.000Z\",' +
 '\n        \"dataFim\": \"2020-05-29T23:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": null,\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n   ' +
 '     \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 95,\n        \"contato\": 2,\n        \"titulo\": \"Dance Practice\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n ' +
 '       \"dataInicio\": \"2020-05-03T18:30:00.000Z\",\n        \"dataFim\": \"2020-05-03T20:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": \"FREQ=WEEKLY;BYDAY=MO,WE\",\n    ' +
 '    \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 114,\n        \"contato\": 3,\n        \"titulo\": \"Softw' +
 'are updates\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-04T09:00:00.000Z\",\n        \"dataFim\": \"2020-05-04T12:00:00.000Z\",\n        \"fusoFi' +
 'm\": null,\n        \"regraDeRecorrencia\": \"\",\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 115' +
 ',\n        \"contato\": 1,\n        \"titulo\": \"Breakfast at Starbucks\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-04T08:00:00.000Z\",\n       ' +
 ' \"dataFim\": \"2020-05-04T09:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": \"\",\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"ev' +
 'entoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 116,\n        \"contato\": 2,\n        \"titulo\": \"Performance review\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n     ' +
 '   \"dataInicio\": \"2020-05-04T14:00:00.000Z\",\n        \"dataFim\": \"2020-05-04T17:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": \"\",\n        \"recorrenciaId\": null' +
 ',\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 118,\n        \"contato\": 1,\n        \"titulo\": \"HR seminar preparation\",\n     ' +
 '   \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-05T10:00:00.000Z\",\n        \"dataFim\": \"2020-05-05T12:00:00.000Z\",\n        \"fusoFim\": null,\n        \"' +
 'regraDeRecorrencia\": \"\",\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 119,\n        \"contato\"' +
 ': 3,\n        \"titulo\": \"Helpdesk weekly meeting\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"dataInicio\": \"2020-05-05T15:00:00.000Z\",\n        \"dataFim\": \"2020-' +
 '05-05T16:00:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": \"FREQ=WEEKLY;BYDAY=WE\",\n        \"recorrenciaId\": null,\n        \"excessaoDaRecorrencia\": null,\n        \"eve' +
 'ntoDeDiaInteiro\": false\n    },\n    {\n        \"id\": 120,\n        \"contato\": 3,\n        \"titulo\": \"Website upload\",\n        \"descricao\": \"\",\n        \"fusoInicio\": null,\n        \"' +
 'dataInicio\": \"2020-05-07T07:00:00.000Z\",\n        \"dataFim\": \"2020-05-07T08:30:00.000Z\",\n        \"fusoFim\": null,\n        \"regraDeRecorrencia\": \"\",\n        \"recorrenciaId\": null,\n  ' +
 '      \"excessaoDaRecorrencia\": null,\n        \"eventoDeDiaInteiro\": false\n    }\n]');
}
