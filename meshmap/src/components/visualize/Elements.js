export default {
  elements: {
    nodes: [
      {
        data: {
          app: "details",
          grpcIn: null,
          grpcInErr: null,
          grpcOut: null,
          httpIn: null,
          httpIn3xx: null,
          httpIn4xx: null,
          httpIn5xx: null,
          httpOut: null,
          isGroup: "app",
          tcpIn: null,
          tcpOut: null,
          id: "bcbbc26d201909101e45d8edb0b617ae",
          nodeType: "app",
          namespace: "default"
        },
        position: {
          x: 301,
          y: 69
        },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          app: "productpage",
          grpcIn: null,
          grpcInErr: null,
          grpcOut: null,
          httpIn: null,
          httpIn3xx: null,
          httpIn4xx: null,
          httpIn5xx: null,
          httpOut: null,
          isGroup: "app",
          tcpIn: null,
          tcpOut: null,
          id: "1cd79b3dd828bdcf35a57fdfc4e4f505",
          nodeType: "app",
          namespace: "default"
        },
        position: {
          x: 89.5,
          y: 307
        },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          app: "ratings",
          grpcIn: null,
          grpcInErr: null,
          grpcOut: null,
          httpIn: null,
          httpIn3xx: null,
          httpIn4xx: null,
          httpIn5xx: null,
          httpOut: null,
          isGroup: "app",
          tcpIn: null,
          tcpOut: null,
          id: "4aa670e0682d4be3aaf24d8f589feb4b",
          nodeType: "app",
          namespace: "default"
        },
        position: {
          x: 493.5,
          y: 338.75
        },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          app: "reviews",
          grpcIn: null,
          grpcInErr: null,
          grpcOut: null,
          httpIn: null,
          httpIn3xx: null,
          httpIn4xx: null,
          httpIn5xx: null,
          httpOut: null,
          isGroup: "app",
          tcpIn: null,
          tcpOut: null,
          id: "6519157be154675342fb76c41edc731c",
          nodeType: "app",
          namespace: "default"
        },
        position: {
          x: 301,
          y: 307
        },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          destServices: [
            {
              namespace: "unknown",
              name: "kubernetes.default.svc.cluster.local"
            }
          ],
          grpcIn: null,
          grpcInErr: null,
          grpcOut: null,
          httpIn: null,
          httpIn3xx: null,
          httpIn4xx: null,
          httpIn5xx: null,
          httpOut: null,
          service: "kubernetes.default.svc.cluster.local",
          tcpIn: 2130.18,
          tcpOut: null,
          id: "d40327e4c9dd917578c6c51cb641dbf4",
          nodeType: "service",
          namespace: "unknown"
        },
        position: {
          x: 301,
          y: 521
        },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          app: "prometheus",
          grpcIn: null,
          grpcInErr: null,
          grpcOut: null,
          httpIn: null,
          httpIn3xx: null,
          httpIn4xx: null,
          httpIn5xx: null,
          httpOut: null,
          isRoot: true,
          tcpIn: null,
          tcpOut: 2130.18,
          version: "latest",
          workload: "prometheus",
          id: "c9e43c28f29e6debbbd908c816bc0a4e",
          nodeType: "app",
          namespace: "default"
        },
        position: {
          x: 89.5,
          y: 521
        },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          app: "details",
          destServices: [
            {
              namespace: "default",
              name: "details"
            }
          ],
          grpcIn: null,
          grpcInErr: null,
          grpcOut: null,
          httpIn: null,
          httpIn3xx: null,
          httpIn4xx: null,
          httpIn5xx: null,
          httpOut: null,
          service: "details",
          tcpIn: null,
          tcpOut: null,
          id: "16d04f68bd507ca9b0707c2a576d1fc2",
          parent: "bcbbc26d201909101e45d8edb0b617ae",
          nodeType: "service",
          namespace: "default"
        },
        position: {
          x: 261,
          y: 58
        },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          app: "details",
          destServices: [
            {
              namespace: "default",
              name: "details"
            }
          ],
          grpcIn: null,
          grpcInErr: null,
          grpcOut: null,
          httpIn: null,
          httpIn3xx: null,
          httpIn4xx: null,
          httpIn5xx: null,
          httpOut: null,
          tcpIn: null,
          tcpOut: null,
          version: "v1",
          workload: "details-v1",
          id: "721ef0b8cfba57d153213a5d659ae9da",
          parent: "bcbbc26d201909101e45d8edb0b617ae",
          nodeType: "app",
          namespace: "default",
          URL: "http://google.com"
        },
        position: {
          x: 342,
          y: 58
        },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          app: "productpage",
          destServices: [
            {
              namespace: "default",
              name: "productpage"
            }
          ],
          grpcIn: null,
          grpcInErr: null,
          grpcOut: null,
          hasVS: true,
          httpIn: null,
          httpIn3xx: null,
          httpIn4xx: null,
          httpIn5xx: null,
          httpOut: null,
          service: "productpage",
          tcpIn: null,
          tcpOut: null,
          id: "c2efd356d9a25fd009efe2a323e12361",
          parent: "1cd79b3dd828bdcf35a57fdfc4e4f505",
          nodeType: "service",
          namespace: "default"
        },
        position: {
          x: 49.5,
          y: 295
        },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          app: "productpage",
          destServices: [
            {
              namespace: "default",
              name: "productpage"
            }
          ],
          grpcIn: null,
          grpcInErr: null,
          grpcOut: null,
          httpIn: null,
          httpIn3xx: null,
          httpIn4xx: null,
          httpIn5xx: null,
          httpOut: null,
          tcpIn: null,
          tcpOut: null,
          version: "v1",
          workload: "productpage-v1",
          id: "06e488a37fc9aa5b0e0805db4f16ae69",
          parent: "1cd79b3dd828bdcf35a57fdfc4e4f505",
          nodeType: "app",
          namespace: "default"
        },
        position: {
          x: 150,
          y: 295
        },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          app: "ratings",
          destServices: [
            {
              namespace: "default",
              name: "ratings"
            }
          ],
          grpcIn: null,
          grpcInErr: null,
          grpcOut: null,
          httpIn: null,
          httpIn3xx: null,
          httpIn4xx: null,
          httpIn5xx: null,
          httpOut: null,
          service: "ratings",
          tcpIn: null,
          tcpOut: null,
          id: "906196769ac4714aae43f4f789a36d9c",
          parent: "4aa670e0682d4be3aaf24d8f589feb4b",
          nodeType: "service",
          namespace: "default"
        },
        position: {
          x: 453.5,
          y: 327.75
        },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          app: "ratings",
          destServices: [
            {
              namespace: "default",
              name: "ratings"
            }
          ],
          grpcIn: null,
          grpcInErr: null,
          grpcOut: null,
          httpIn: null,
          httpIn3xx: null,
          httpIn4xx: null,
          httpIn5xx: null,
          httpOut: null,
          tcpIn: null,
          tcpOut: null,
          version: "v1",
          workload: "ratings-v1",
          id: "4b64bda48e5a3c7e50ab1c63836c9469",
          parent: "4aa670e0682d4be3aaf24d8f589feb4b",
          nodeType: "app",
          namespace: "default"
        },
        position: {
          x: 535,
          y: 327.75
        },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          app: "reviews",
          destServices: [
            {
              namespace: "default",
              name: "reviews"
            }
          ],
          grpcIn: null,
          grpcInErr: null,
          grpcOut: null,
          httpIn: null,
          httpIn3xx: null,
          httpIn4xx: null,
          httpIn5xx: null,
          httpOut: null,
          service: "reviews",
          tcpIn: null,
          tcpOut: null,
          id: "adbe9380f23fcbefe5fedd6beb0597ef",
          parent: "6519157be154675342fb76c41edc731c",
          nodeType: "service",
          namespace: "default"
        },
        position: {
          x: 261,
          y: 296
        },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          app: "reviews",
          destServices: [
            {
              namespace: "default",
              name: "reviews"
            }
          ],
          grpcIn: null,
          grpcInErr: null,
          grpcOut: null,
          httpIn: null,
          httpIn3xx: null,
          httpIn4xx: null,
          httpIn5xx: null,
          httpOut: null,
          tcpIn: null,
          tcpOut: null,
          version: "v1",
          workload: "reviews-v1",
          id: "ce6eb1c1255b2c90e76a8f1a803cdb24",
          parent: "6519157be154675342fb76c41edc731c",
          nodeType: "app",
          namespace: "default"
        },
        position: {
          x: 344,
          y: 246
        },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          app: "reviews",
          destServices: [
            {
              namespace: "default",
              name: "reviews"
            }
          ],
          grpcIn: null,
          grpcInErr: null,
          grpcOut: null,
          httpIn: null,
          httpIn3xx: null,
          httpIn4xx: null,
          httpIn5xx: null,
          httpOut: null,
          tcpIn: null,
          tcpOut: null,
          version: "v2",
          workload: "reviews-v2",
          id: "31150e7e5adf85b63f22fbd8255803d7",
          parent: "6519157be154675342fb76c41edc731c",
          nodeType: "app",
          namespace: "default"
        },
        position: {
          x: 344,
          y: 346
        },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      }
    ],
    edges: [
      {
        data: {
          grpc: null,
          grpcErr: null,
          grpcPercentErr: null,
          grpcPercentReq: null,
          hasTraffic: true,
          http: null,
          http3xx: null,
          http4xx: null,
          http5xx: null,
          httpPercentErr: null,
          httpPercentReq: null,
          isMTLS: -1,
          protocol: "tcp",
          responses: {
            "-": {
              flags: {
                "-": "100.0"
              },
              hosts: {
                "kubernetes.default.svc.cluster.local": "100.0"
              }
            }
          },
          responseTime: null,
          tcp: 2130.18,
          id: "ec73f6bac5146601e57af53f400f4b86",
          source: "c9e43c28f29e6debbbd908c816bc0a4e",
          target: "d40327e4c9dd917578c6c51cb641dbf4",
          isMtls: null
        },
        position: {
          x: 0,
          y: 0
        },
        group: "edges",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: true,
        classes: ""
      },
      {
        data: {
          grpc: null,
          grpcErr: null,
          grpcPercentErr: null,
          grpcPercentReq: null,
          http: null,
          http3xx: null,
          http4xx: null,
          http5xx: null,
          httpPercentErr: null,
          httpPercentReq: null,
          isMTLS: -1,
          protocol: "http",
          responseTime: null,
          tcp: null,
          id: "603b3196d57ed4275cde825c9b550cf8",
          source: "adbe9380f23fcbefe5fedd6beb0597ef",
          target: "31150e7e5adf85b63f22fbd8255803d7",
          traffic: {
            protocol: "http"
          }
        },
        position: {
          x: 0,
          y: 0
        },
        group: "edges",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: true,
        classes: ""
      },
      {
        data: {
          grpc: null,
          grpcErr: null,
          grpcPercentErr: null,
          grpcPercentReq: null,
          http: null,
          http3xx: null,
          http4xx: null,
          http5xx: null,
          httpPercentErr: null,
          httpPercentReq: null,
          isMTLS: -1,
          protocol: "http",
          responseTime: null,
          tcp: null,
          id: "5bfd2136556bf57f55046dee357f11ba",
          source: "adbe9380f23fcbefe5fedd6beb0597ef",
          target: "ce6eb1c1255b2c90e76a8f1a803cdb24",
          traffic: {
            protocol: "http"
          }
        },
        position: {
          x: 0,
          y: 0
        },
        group: "edges",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: true,
        classes: ""
      },
      {
        data: {
          grpc: null,
          grpcErr: null,
          grpcPercentErr: null,
          grpcPercentReq: null,
          http: null,
          http3xx: null,
          http4xx: null,
          http5xx: null,
          httpPercentErr: null,
          httpPercentReq: null,
          isMTLS: -1,
          protocol: "http",
          responseTime: null,
          tcp: null,
          id: "085e267222568260e02b64d1d47b48fb",
          source: "31150e7e5adf85b63f22fbd8255803d7",
          target: "906196769ac4714aae43f4f789a36d9c",
          traffic: {
            protocol: "http"
          }
        },
        position: {
          x: 0,
          y: 0
        },
        group: "edges",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: true,
        classes: ""
      },
      {
        data: {
          grpc: null,
          grpcErr: null,
          grpcPercentErr: null,
          grpcPercentReq: null,
          http: null,
          http3xx: null,
          http4xx: null,
          http5xx: null,
          httpPercentErr: null,
          httpPercentReq: null,
          isMTLS: -1,
          protocol: "http",
          responseTime: null,
          tcp: null,
          id: "a1dfe2e1b0907e1cb16670f1abe2e41e",
          source: "906196769ac4714aae43f4f789a36d9c",
          target: "4b64bda48e5a3c7e50ab1c63836c9469",
          traffic: {
            protocol: "http"
          }
        },
        position: {
          x: 0,
          y: 0
        },
        group: "edges",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: true,
        classes: ""
      },
      {
        data: {
          grpc: null,
          grpcErr: null,
          grpcPercentErr: null,
          grpcPercentReq: null,
          http: null,
          http3xx: null,
          http4xx: null,
          http5xx: null,
          httpPercentErr: null,
          httpPercentReq: null,
          isMTLS: -1,
          protocol: "http",
          responseTime: null,
          tcp: null,
          id: "49e7da37f0733e10454cdc64887377dc",
          source: "06e488a37fc9aa5b0e0805db4f16ae69",
          target: "adbe9380f23fcbefe5fedd6beb0597ef",
          traffic: {
            protocol: "http"
          }
        },
        position: {
          x: 0,
          y: 0
        },
        group: "edges",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: true,
        classes: ""
      },
      {
        data: {
          grpc: null,
          grpcErr: null,
          grpcPercentErr: null,
          grpcPercentReq: null,
          http: null,
          http3xx: null,
          http4xx: null,
          http5xx: null,
          httpPercentErr: null,
          httpPercentReq: null,
          isMTLS: -1,
          protocol: "http",
          responseTime: null,
          tcp: null,
          id: "3d6c17c6a0ba2aecb9fc3b4466502fb9",
          source: "4b64bda48e5a3c7e50ab1c63836c9469",
          target: "c2efd356d9a25fd009efe2a323e12361",
          traffic: {
            protocol: "http"
          }
        },
        position: {
          x: 0,
          y: 0
        },
        group: "edges",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: true,
        classes: ""
      },
      {
        data: {
          grpc: null,
          grpcErr: null,
          grpcPercentErr: null,
          grpcPercentReq: null,
          http: null,
          http3xx: null,
          http4xx: null,
          http5xx: null,
          httpPercentErr: null,
          httpPercentReq: null,
          isMTLS: -1,
          protocol: "http",
          responseTime: null,
          tcp: null,
          id: "86725a525e9ddca333f585f328c423e9",
          source: "c2efd356d9a25fd009efe2a323e12361",
          target: "06e488a37fc9aa5b0e0805db4f16ae69",
          traffic: {
            protocol: "http"
          }
        },
        position: {
          x: 0,
          y: 0
        },
        group: "edges",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: true,
        classes: ""
      },
      {
        data: {
          grpc: null,
          grpcErr: null,
          grpcPercentErr: null,
          grpcPercentReq: null,
          http: null,
          http3xx: null,
          http4xx: null,
          http5xx: null,
          httpPercentErr: null,
          httpPercentReq: null,
          isMTLS: -1,
          protocol: "http",
          responseTime: null,
          tcp: null,
          id: "531fdd02d44612b9a7a9f393dcbf6940",
          source: "06e488a37fc9aa5b0e0805db4f16ae69",
          target: "16d04f68bd507ca9b0707c2a576d1fc2",
          traffic: {
            protocol: "http"
          }
        },
        position: {
          x: 0,
          y: 0
        },
        group: "edges",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: true,
        classes: ""
      },
      {
        data: {
          grpc: null,
          grpcErr: null,
          grpcPercentErr: null,
          grpcPercentReq: null,
          http: null,
          http3xx: null,
          http4xx: null,
          http5xx: null,
          httpPercentErr: null,
          httpPercentReq: null,
          isMTLS: -1,
          protocol: "http",
          responseTime: null,
          tcp: null,
          id: "f774bb2441e6cc6e34630c04c150ca35",
          source: "16d04f68bd507ca9b0707c2a576d1fc2",
          target: "721ef0b8cfba57d153213a5d659ae9da",
          traffic: {
            protocol: "http"
          }
        },
        position: {
          x: 0,
          y: 0
        },
        group: "edges",
        removed: false,
        selected: false,
        selectable: false,
        locked: false,
        grabbable: true,
        pannable: true,
        classes: ""
      }
    ]
  }
};
