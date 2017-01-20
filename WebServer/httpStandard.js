/**
 * Created by fimka on 14/01/2017.
 */

const MimeTypes = {
    "application/1d-interleaved-parityfec": {},
    "application/3gpdash-qoe-report+xml": {},
    "application/3gpp-ims+xml": {},
    "application/a2l": {},
    "application/activemessage": {},
    "application/alto-costmap+json": {},
    "application/alto-costmapfilter+json": {},
    "application/alto-directory+json": {},
    "application/alto-endpointcost+json": {},
    "application/alto-endpointcostparams+json": {},
    "application/alto-endpointprop+json": {},
    "application/alto-endpointpropparams+json": {},
    "application/alto-error+json": {},
    "application/alto-networkmap+json": {},
    "application/alto-networkmapfilter+json": {},
    "application/aml": {},
    "application/andrew-inset": {
        "extensions": [
            "ez"
        ]
    },
    "application/applefile": {},
    "application/applixware": {
        "extensions": [
            "aw"
        ]
    },
    "application/atf": {},
    "application/atfx": {},
    "application/atom+xml": {
        "extensions": [
            "atom"
        ]
    },
    "application/atomcat+xml": {
        "extensions": [
            "atomcat"
        ]
    },
    "application/atomdeleted+xml": {},
    "application/atomicmail": {},
    "application/atomsvc+xml": {
        "extensions": [
            "atomsvc"
        ]
    },
    "application/atxml": {},
    "application/auth-policy+xml": {},
    "application/bacnet-xdd+zip": {},
    "application/batch-smtp": {},
    "application/bdoc": {
        "extensions": [
            "bdoc"
        ]
    },
    "application/beep+xml": {},
    "application/calendar+json": {},
    "application/calendar+xml": {},
    "application/call-completion": {},
    "application/cals-1840": {},
    "application/cbor": {},
    "application/ccmp+xml": {},
    "application/ccxml+xml": {
        "extensions": [
            "ccxml"
        ]
    },
    "application/cdfx+xml": {},
    "application/cdmi-capability": {
        "extensions": [
            "cdmia"
        ]
    },
    "application/cdmi-container": {
        "extensions": [
            "cdmic"
        ]
    },
    "application/cdmi-domain": {
        "extensions": [
            "cdmid"
        ]
    },
    "application/cdmi-object": {
        "extensions": [
            "cdmio"
        ]
    },
    "application/cdmi-queue": {
        "extensions": [
            "cdmiq"
        ]
    },
    "application/cdni": {},
    "application/cea": {},
    "application/cea-2018+xml": {},
    "application/cellml+xml": {},
    "application/cfw": {},
    "application/clue_info+xml": {},
    "application/cms": {},
    "application/cnrp+xml": {},
    "application/coap-group+json": {},
    "application/coap-payload": {},
    "application/commonground": {},
    "application/conference-info+xml": {},
    "application/cose": {},
    "application/cose-key": {},
    "application/cose-key-set": {},
    "application/cpl+xml": {},
    "application/csrattrs": {},
    "application/csta+xml": {},
    "application/cstadata+xml": {},
    "application/csvm+json": {},
    "application/cu-seeme": {
        "extensions": [
            "cu"
        ]
    },
    "application/cybercash": {},
    "application/dart": {},
    "application/dash+xml": {
        "extensions": [
            "mpd"
        ]
    },
    "application/dashdelta": {},
    "application/davmount+xml": {
        "extensions": [
            "davmount"
        ]
    },
    "application/dca-rft": {},
    "application/dcd": {},
    "application/dec-dx": {},
    "application/dialog-info+xml": {},
    "application/dicom": {},
    "application/dicom+json": {},
    "application/dicom+xml": {},
    "application/dii": {},
    "application/dit": {},
    "application/dns": {},
    "application/docbook+xml": {
        "extensions": [
            "dbk"
        ]
    },
    "application/dskpp+xml": {},
    "application/dssc+der": {
        "extensions": [
            "dssc"
        ]
    },
    "application/dssc+xml": {
        "extensions": [
            "xdssc"
        ]
    },
    "application/dvcs": {},
    "application/ecmascript": {
        "extensions": [
            "ecma"
        ]
    },
    "application/edi-consent": {},
    "application/edi-x12": {},
    "application/edifact": {},
    "application/efi": {},
    "application/emergencycalldata.comment+xml": {},
    "application/emergencycalldata.deviceinfo+xml": {},
    "application/emergencycalldata.providerinfo+xml": {},
    "application/emergencycalldata.serviceinfo+xml": {},
    "application/emergencycalldata.subscriberinfo+xml": {},
    "application/emma+xml": {
        "extensions": [
            "emma"
        ]
    },
    "application/emotionml+xml": {},
    "application/encaprtp": {},
    "application/epp+xml": {},
    "application/epub+zip": {
        "extensions": [
            "epub"
        ]
    },
    "application/eshop": {},
    "application/exi": {
        "extensions": [
            "exi"
        ]
    },
    "application/fastinfoset": {},
    "application/fastsoap": {},
    "application/fdt+xml": {},
    "application/fits": {},
    "application/font-sfnt": {},
    "application/font-tdpfr": {
        "extensions": [
            "pfr"
        ]
    },
    "application/font-woff": {
        "extensions": [
            "woff"
        ]
    },
    "application/font-woff2": {
        "extensions": [
            "woff2"
        ]
    },
    "application/framework-attributes+xml": {},
    "application/geo+json": {
        "extensions": [
            "geojson"
        ]
    },
    "application/gml+xml": {
        "extensions": [
            "gml"
        ]
    },
    "application/gpx+xml": {
        "extensions": [
            "gpx"
        ]
    },
    "application/gxf": {
        "extensions": [
            "gxf"
        ]
    },
    "application/gzip": {},
    "application/h224": {},
    "application/held+xml": {},
    "application/http": {},
    "application/hyperstudio": {
        "extensions": [
            "stk"
        ]
    },
    "application/ibe-key-request+xml": {},
    "application/ibe-pkg-reply+xml": {},
    "application/ibe-pp-data": {},
    "application/iges": {},
    "application/im-iscomposing+xml": {},
    "application/index": {},
    "application/index.cmd": {},
    "application/index.obj": {},
    "application/index.response": {},
    "application/index.vnd": {},
    "application/inkml+xml": {
        "extensions": [
            "ink",
            "inkml"
        ]
    },
    "application/iotp": {},
    "application/ipfix": {
        "extensions": [
            "ipfix"
        ]
    },
    "application/ipp": {},
    "application/isup": {},
    "application/its+xml": {},
    "application/java-archive": {
        "extensions": [
            "jar",
            "war",
            "ear"
        ]
    },
    "application/java-serialized-object": {
        "extensions": [
            "ser"
        ]
    },
    "application/java-vm": {
        "extensions": [
            "class"
        ]
    },
    "application/javascript": {
        "charset": "UTF-8",
            "extensions": [
            "js"
        ]
    },
    "application/jose": {},
    "application/jose+json": {},
    "application/jrd+json": {},
    "application/json": {
        "charset": "UTF-8",
            "extensions": [
            "json",
            "map"
        ]
    },
    "application/json-patch+json": {},
    "application/json-seq": {},
    "application/json5": {
        "extensions": [
            "json5"
        ]
    },
    "application/jsonml+json": {
        "extensions": [
            "jsonml"
        ]
    },
    "application/jwk+json": {},
    "application/jwk-set+json": {},
    "application/jwt": {},
    "application/kpml-request+xml": {},
    "application/kpml-response+xml": {},
    "application/ld+json": {
        "extensions": [
            "jsonld"
        ]
    },
    "application/lgr+xml": {},
    "application/link-format": {},
    "application/load-control+xml": {},
    "application/lost+xml": {
        "extensions": [
            "lostxml"
        ]
    },
    "application/lostsync+xml": {},
    "application/lxf": {},
    "application/mac-binhex40": {
        "extensions": [
            "hqx"
        ]
    },
    "application/mac-compactpro": {
        "extensions": [
            "cpt"
        ]
    },
    "application/macwriteii": {},
    "application/mads+xml": {
        "extensions": [
            "mads"
        ]
    },
    "application/manifest+json": {
        "charset": "UTF-8",
            "extensions": [
            "webmanifest"
        ]
    },
    "application/marc": {
        "extensions": [
            "mrc"
        ]
    },
    "application/marcxml+xml": {
        "extensions": [
            "mrcx"
        ]
    },
    "application/mathematica": {
        "extensions": [
            "ma",
            "nb",
            "mb"
        ]
    },
    "application/mathml+xml": {
        "extensions": [
            "mathml"
        ]
    },
    "application/mathml-content+xml": {},
    "application/mathml-presentation+xml": {},
    "application/mbms-associated-procedure-description+xml": {},
    "application/mbms-deregister+xml": {},
    "application/mbms-envelope+xml": {},
    "application/mbms-msk+xml": {},
    "application/mbms-msk-response+xml": {},
    "application/mbms-protection-description+xml": {},
    "application/mbms-reception-report+xml": {},
    "application/mbms-register+xml": {},
    "application/mbms-register-response+xml": {},
    "application/mbms-schedule+xml": {},
    "application/mbms-user-service-description+xml": {},
    "application/mbox": {
        "extensions": [
            "mbox"
        ]
    },
    "application/media-policy-dataset+xml": {},
    "application/media_control+xml": {},
    "application/mediaservercontrol+xml": {
        "extensions": [
            "mscml"
        ]
    },
    "application/merge-patch+json": {},
    "application/metalink+xml": {
        "extensions": [
            "metalink"
        ]
    },
    "application/metalink4+xml": {
        "extensions": [
            "meta4"
        ]
    },
    "application/mets+xml": {
        "extensions": [
            "mets"
        ]
    },
    "application/mf4": {},
    "application/mikey": {},
    "application/mods+xml": {
        "extensions": [
            "mods"
        ]
    },
    "application/moss-keys": {},
    "application/moss-signature": {},
    "application/mosskey-data": {},
    "application/mosskey-request": {},
    "application/mp21": {
        "extensions": [
            "m21",
            "mp21"
        ]
    },
    "application/mp4": {
        "extensions": [
            "mp4s",
            "m4p"
        ]
    },
    "application/mpeg4-generic": {},
    "application/mpeg4-iod": {},
    "application/mpeg4-iod-xmt": {},
    "application/mrb-consumer+xml": {},
    "application/mrb-publish+xml": {},
    "application/msc-ivr+xml": {},
    "application/msc-mixer+xml": {},
    "application/msword": {
        "extensions": [
            "doc",
            "dot"
        ]
    },
    "application/mud+json": {},
    "application/mxf": {
        "extensions": [
            "mxf"
        ]
    },
    "application/nasdata": {},
    "application/news-checkgroups": {},
    "application/news-groupinfo": {},
    "application/news-transmission": {},
    "application/nlsml+xml": {},
    "application/nss": {},
    "application/ocsp-request": {},
    "application/ocsp-response": {},
    "application/octet-stream": {
        "extensions": [
            "bin",
            "dms",
            "lrf",
            "mar",
            "so",
            "dist",
            "distz",
            "pkg",
            "bpk",
            "dump",
            "elc",
            "deploy",
            "exe",
            "dll",
            "deb",
            "dmg",
            "iso",
            "img",
            "msi",
            "msp",
            "msm",
            "buffer"
        ]
    },
    "application/oda": {
        "extensions": [
            "oda"
        ]
    },
    "application/odx": {},
    "application/oebps-package+xml": {
        "extensions": [
            "opf"
        ]
    },
    "application/ogg": {
        "extensions": [
            "ogx"
        ]
    },
    "application/omdoc+xml": {
        "extensions": [
            "omdoc"
        ]
    },
    "application/onenote": {
        "extensions": [
            "onetoc",
            "onetoc2",
            "onetmp",
            "onepkg"
        ]
    },
    "application/oxps": {
        "extensions": [
            "oxps"
        ]
    },
    "application/p2p-overlay+xml": {},
    "application/parityfec": {},
    "application/patch-ops-error+xml": {
        "extensions": [
            "xer"
        ]
    },
    "application/pdf": {
        "extensions": [
            "pdf"
        ]
    },
    "application/pdx": {},
    "application/pgp-encrypted": {
        "extensions": [
            "pgp"
        ]
    },
    "application/pgp-keys": {},
    "application/pgp-signature": {
        "extensions": [
            "asc",
            "sig"
        ]
    },
    "application/pics-rules": {
        "extensions": [
            "prf"
        ]
    },
    "application/pidf+xml": {},
    "application/pidf-diff+xml": {},
    "application/pkcs10": {
        "extensions": [
            "p10"
        ]
    },
    "application/pkcs12": {},
    "application/pkcs7-mime": {
        "extensions": [
            "p7m",
            "p7c"
        ]
    },
    "application/pkcs7-signature": {
        "extensions": [
            "p7s"
        ]
    },
    "application/pkcs8": {
        "extensions": [
            "p8"
        ]
    },
    "application/pkix-attr-cert": {
        "extensions": [
            "ac"
        ]
    },
    "application/pkix-cert": {
        "extensions": [
            "cer"
        ]
    },
    "application/pkix-crl": {
        "extensions": [
            "crl"
        ]
    },
    "application/pkix-pkipath": {
        "extensions": [
            "pkipath"
        ]
    },
    "application/pkixcmp": {
        "extensions": [
            "pki"
        ]
    },
    "application/pls+xml": {
        "extensions": [
            "pls"
        ]
    },
    "application/poc-settings+xml": {},
    "application/postscript": {
        "extensions": [
            "ai",
            "eps",
            "ps"
        ]
    },
    "application/ppsp-tracker+json": {},
    "application/problem+json": {},
    "application/problem+xml": {},
    "application/provenance+xml": {},
    "application/prs.alvestrand.titrax-sheet": {},
    "application/prs.cww": {
        "extensions": [
            "cww"
        ]
    },
    "application/prs.hpub+zip": {},
    "application/prs.nprend": {},
    "application/prs.plucker": {},
    "application/prs.rdf-xml-crypt": {},
    "application/prs.xsf+xml": {},
    "application/pskc+xml": {
        "extensions": [
            "pskcxml"
        ]
    },
    "application/qsig": {},
    "application/raptorfec": {},
    "application/rdap+json": {},
    "application/rdf+xml": {
        "extensions": [
            "rdf"
        ]
    },
    "application/reginfo+xml": {
        "extensions": [
            "rif"
        ]
    },
    "application/relax-ng-compact-syntax": {
        "extensions": [
            "rnc"
        ]
    },
    "application/remote-printing": {},
    "application/reputon+json": {},
    "application/resource-lists+xml": {
        "extensions": [
            "rl"
        ]
    },
    "application/resource-lists-diff+xml": {
        "extensions": [
            "rld"
        ]
    },
    "application/rfc+xml": {},
    "application/riscos": {},
    "application/rlmi+xml": {},
    "application/rls-services+xml": {
        "extensions": [
            "rs"
        ]
    },
    "application/rpki-ghostbusters": {
        "extensions": [
            "gbr"
        ]
    },
    "application/rpki-manifest": {
        "extensions": [
            "mft"
        ]
    },
    "application/rpki-roa": {
        "extensions": [
            "roa"
        ]
    },
    "application/rpki-updown": {},
    "application/rsd+xml": {
        "extensions": [
            "rsd"
        ]
    },
    "application/rss+xml": {
        "extensions": [
            "rss"
        ]
    },
    "application/rtf": {
        "extensions": [
            "rtf"
        ]
    },
    "application/rtploopback": {},
    "application/rtx": {},
    "application/samlassertion+xml": {},
    "application/samlmetadata+xml": {},
    "application/sbml+xml": {
        "extensions": [
            "sbml"
        ]
    },
    "application/scaip+xml": {},
    "application/scim+json": {},
    "application/scvp-cv-request": {
        "extensions": [
            "scq"
        ]
    },
    "application/scvp-cv-response": {
        "extensions": [
            "scs"
        ]
    },
    "application/scvp-vp-request": {
        "extensions": [
            "spq"
        ]
    },
    "application/scvp-vp-response": {
        "extensions": [
            "spp"
        ]
    },
    "application/sdp": {
        "extensions": [
            "sdp"
        ]
    },
    "application/sep+xml": {},
    "application/sep-exi": {},
    "application/session-info": {},
    "application/set-payment": {},
    "application/set-payment-initiation": {
        "extensions": [
            "setpay"
        ]
    },
    "application/set-registration": {},
    "application/set-registration-initiation": {
        "extensions": [
            "setreg"
        ]
    },
    "application/sgml": {},
    "application/sgml-open-catalog": {},
    "application/shf+xml": {
        "extensions": [
            "shf"
        ]
    },
    "application/sieve": {},
    "application/simple-filter+xml": {},
    "application/simple-message-summary": {},
    "application/simplesymbolcontainer": {},
    "application/slate": {},
    "application/smil": {},
    "application/smil+xml": {
        "extensions": [
            "smi",
            "smil"
        ]
    },
    "application/smpte336m": {},
    "application/soap+fastinfoset": {},
    "application/soap+xml": {},
    "application/sparql-query": {
        "extensions": [
            "rq"
        ]
    },
    "application/sparql-results+xml": {
        "extensions": [
            "srx"
        ]
    },
    "application/spirits-event+xml": {},
    "application/sql": {},
    "application/srgs": {
        "extensions": [
            "gram"
        ]
    },
    "application/srgs+xml": {
        "extensions": [
            "grxml"
        ]
    },
    "application/sru+xml": {
        "extensions": [
            "sru"
        ]
    },
    "application/ssdl+xml": {
        "extensions": [
            "ssdl"
        ]
    },
    "application/ssml+xml": {
        "extensions": [
            "ssml"
        ]
    },
    "application/tamp-apex-update": {},
    "application/tamp-apex-update-confirm": {},
    "application/tamp-community-update": {},
    "application/tamp-community-update-confirm": {},
    "application/tamp-error": {},
    "application/tamp-sequence-adjust": {},
    "application/tamp-sequence-adjust-confirm": {},
    "application/tamp-status-query": {},
    "application/tamp-status-response": {},
    "application/tamp-update": {},
    "application/tamp-update-confirm": {},
    "application/tar": {},
    "application/tei+xml": {
        "extensions": [
            "tei",
            "teicorpus"
        ]
    },
    "application/thraud+xml": {
        "extensions": [
            "tfi"
        ]
    },
    "application/timestamp-query": {},
    "application/timestamp-reply": {},
    "application/timestamped-data": {
        "extensions": [
            "tsd"
        ]
    },
    "application/trig": {},
    "application/ttml+xml": {},
    "application/tve-trigger": {},
    "application/ulpfec": {},
    "application/urc-grpsheet+xml": {},
    "application/urc-ressheet+xml": {},
    "application/urc-targetdesc+xml": {},
    "application/urc-uisocketdesc+xml": {},
    "application/vcard+json": {},
    "application/vcard+xml": {},
    "application/vemmi": {},
    "application/vividence.scriptfile": {},
    "application/vnd.3gpp-prose+xml": {},
    "application/vnd.3gpp-prose-pc3ch+xml": {},
    "application/vnd.3gpp.access-transfer-events+xml": {},
    "application/vnd.3gpp.bsf+xml": {},
    "application/vnd.3gpp.mid-call+xml": {},
    "application/vnd.3gpp.pic-bw-large": {
        "extensions": [
            "plb"
        ]
    },
    "application/vnd.3gpp.pic-bw-small": {
        "extensions": [
            "psb"
        ]
    },
    "application/vnd.3gpp.pic-bw-var": {
        "extensions": [
            "pvb"
        ]
    },
    "application/vnd.3gpp.sms": {},
    "application/vnd.3gpp.sms+xml": {},
    "application/vnd.3gpp.srvcc-ext+xml": {},
    "application/vnd.3gpp.srvcc-info+xml": {},
    "application/vnd.3gpp.state-and-event-info+xml": {},
    "application/vnd.3gpp.ussd+xml": {},
    "application/vnd.3gpp2.bcmcsinfo+xml": {},
    "application/vnd.3gpp2.sms": {},
    "application/vnd.3gpp2.tcap": {
        "extensions": [
            "tcap"
        ]
    },
    "application/vnd.3lightssoftware.imagescal": {},
    "application/vnd.3m.post-it-notes": {
        "extensions": [
            "pwn"
        ]
    },
    "application/vnd.accpac.simply.aso": {
        "extensions": [
            "aso"
        ]
    },
    "application/vnd.accpac.simply.imp": {
        "extensions": [
            "imp"
        ]
    },
    "application/vnd.acucobol": {
        "extensions": [
            "acu"
        ]
    },
    "application/vnd.acucorp": {
        "extensions": [
            "atc",
            "acutc"
        ]
    },
    "application/vnd.adobe.air-application-installer-package+zip": {
        "extensions": [
            "air"
        ]
    },
    "application/vnd.adobe.flash.movie": {},
    "application/vnd.adobe.formscentral.fcdt": {
        "extensions": [
            "fcdt"
        ]
    },
    "application/vnd.adobe.fxp": {
        "extensions": [
            "fxp",
            "fxpl"
        ]
    },
    "application/vnd.adobe.partial-upload": {},
    "application/vnd.adobe.xdp+xml": {
        "extensions": [
            "xdp"
        ]
    },
    "application/vnd.adobe.xfdf": {
        "extensions": [
            "xfdf"
        ]
    },
    "application/vnd.aether.imp": {},
    "application/vnd.ah-barcode": {},
    "application/vnd.ahead.space": {
        "extensions": [
            "ahead"
        ]
    },
    "application/vnd.airzip.filesecure.azf": {
        "extensions": [
            "azf"
        ]
    },
    "application/vnd.airzip.filesecure.azs": {
        "extensions": [
            "azs"
        ]
    },
    "application/vnd.amazon.ebook": {
        "extensions": [
            "azw"
        ]
    },
    "application/vnd.amazon.mobi8-ebook": {},
    "application/vnd.americandynamics.acc": {
        "extensions": [
            "acc"
        ]
    },
    "application/vnd.amiga.ami": {
        "extensions": [
            "ami"
        ]
    },
    "application/vnd.amundsen.maze+xml": {},
    "application/vnd.android.package-archive": {
        "extensions": [
            "apk"
        ]
    },
    "application/vnd.anki": {},
    "application/vnd.anser-web-certificate-issue-initiation": {
        "extensions": [
            "cii"
        ]
    },
    "application/vnd.anser-web-funds-transfer-initiation": {
        "extensions": [
            "fti"
        ]
    },
    "application/vnd.antix.game-component": {
        "extensions": [
            "atx"
        ]
    },
    "application/vnd.apache.thrift.binary": {},
    "application/vnd.apache.thrift.compact": {},
    "application/vnd.apache.thrift.json": {},
    "application/vnd.api+json": {},
    "application/vnd.apple.installer+xml": {
        "extensions": [
            "mpkg"
        ]
    },
    "application/vnd.apple.mpegurl": {
        "extensions": [
            "m3u8"
        ]
    },
    "application/vnd.apple.pkpass": {
        "extensions": [
            "pkpass"
        ]
    },
    "application/vnd.arastra.swi": {},
    "application/vnd.aristanetworks.swi": {
        "extensions": [
            "swi"
        ]
    },
    "application/vnd.artsquare": {},
    "application/vnd.astraea-software.iota": {
        "extensions": [
            "iota"
        ]
    },
    "application/vnd.audiograph": {
        "extensions": [
            "aep"
        ]
    },
    "application/vnd.autopackage": {},
    "application/vnd.avistar+xml": {},
    "application/vnd.balsamiq.bmml+xml": {},
    "application/vnd.balsamiq.bmpr": {},
    "application/vnd.bekitzur-stech+json": {},
    "application/vnd.biopax.rdf+xml": {},
    "application/vnd.blueice.multipass": {
        "extensions": [
            "mpm"
        ]
    },
    "application/vnd.bluetooth.ep.oob": {},
    "application/vnd.bluetooth.le.oob": {},
    "application/vnd.bmi": {
        "extensions": [
            "bmi"
        ]
    },
    "application/vnd.businessobjects": {
        "extensions": [
            "rep"
        ]
    },
    "application/vnd.cab-jscript": {},
    "application/vnd.canon-cpdl": {},
    "application/vnd.canon-lips": {},
    "application/vnd.cendio.thinlinc.clientconf": {},
    "application/vnd.century-systems.tcp_stream": {},
    "application/vnd.chemdraw+xml": {
        "extensions": [
            "cdxml"
        ]
    },
    "application/vnd.chess-pgn": {},
    "application/vnd.chipnuts.karaoke-mmd": {
        "extensions": [
            "mmd"
        ]
    },
    "application/vnd.cinderella": {
        "extensions": [
            "cdy"
        ]
    },
    "application/vnd.cirpack.isdn-ext": {},
    "application/vnd.citationstyles.style+xml": {},
    "application/vnd.claymore": {
        "extensions": [
            "cla"
        ]
    },
    "application/vnd.cloanto.rp9": {
        "extensions": [
            "rp9"
        ]
    },
    "application/vnd.clonk.c4group": {
        "extensions": [
            "c4g",
            "c4d",
            "c4f",
            "c4p",
            "c4u"
        ]
    },
    "application/vnd.cluetrust.cartomobile-config": {
        "extensions": [
            "c11amc"
        ]
    },
    "application/vnd.cluetrust.cartomobile-config-pkg": {
        "extensions": [
            "c11amz"
        ]
    },
    "application/vnd.coffeescript": {},
    "application/vnd.collection+json": {},
    "application/vnd.collection.doc+json": {},
    "application/vnd.collection.next+json": {},
    "application/vnd.comicbook+zip": {},
    "application/vnd.commerce-battelle": {},
    "application/vnd.commonspace": {
        "extensions": [
            "csp"
        ]
    },
    "application/vnd.contact.cmsg": {
        "extensions": [
            "cdbcmsg"
        ]
    },
    "application/vnd.coreos.ignition+json": {},
    "application/vnd.cosmocaller": {
        "extensions": [
            "cmc"
        ]
    },
    "application/vnd.crick.clicker": {
        "extensions": [
            "clkx"
        ]
    },
    "application/vnd.crick.clicker.keyboard": {
        "extensions": [
            "clkk"
        ]
    },
    "application/vnd.crick.clicker.palette": {
        "extensions": [
            "clkp"
        ]
    },
    "application/vnd.crick.clicker.template": {
        "extensions": [
            "clkt"
        ]
    },
    "application/vnd.crick.clicker.wordbank": {
        "extensions": [
            "clkw"
        ]
    },
    "application/vnd.criticaltools.wbs+xml": {
        "extensions": [
            "wbs"
        ]
    },
    "application/vnd.ctc-posml": {
        "extensions": [
            "pml"
        ]
    },
    "application/vnd.ctct.ws+xml": {},
    "application/vnd.cups-pdf": {},
    "application/vnd.cups-postscript": {},
    "application/vnd.cups-ppd": {
        "extensions": [
            "ppd"
        ]
    },
    "application/vnd.cups-raster": {},
    "application/vnd.cups-raw": {},
    "application/vnd.curl": {},
    "application/vnd.curl.car": {
        "extensions": [
            "car"
        ]
    },
    "application/vnd.curl.pcurl": {
        "extensions": [
            "pcurl"
        ]
    },
    "application/vnd.cyan.dean.root+xml": {},
    "application/vnd.cybank": {},
    "application/vnd.d2l.coursepackage1p0+zip": {},
    "application/vnd.dart": {
        "extensions": [
            "dart"
        ]
    },
    "application/vnd.data-vision.rdz": {
        "extensions": [
            "rdz"
        ]
    },
    "application/vnd.dataresource+json": {},
    "application/vnd.debian.binary-package": {},
    "application/vnd.dece.data": {
        "extensions": [
            "uvf",
            "uvvf",
            "uvd",
            "uvvd"
        ]
    },
    "application/vnd.dece.ttml+xml": {
        "extensions": [
            "uvt",
            "uvvt"
        ]
    },
    "application/vnd.dece.unspecified": {
        "extensions": [
            "uvx",
            "uvvx"
        ]
    },
    "application/vnd.dece.zip": {
        "extensions": [
            "uvz",
            "uvvz"
        ]
    },
    "application/vnd.denovo.fcselayout-link": {
        "extensions": [
            "fe_launch"
        ]
    },
    "application/vnd.desmume-movie": {},
    "application/vnd.desmume.movie": {},
    "application/vnd.dir-bi.plate-dl-nosuffix": {},
    "application/vnd.dm.delegation+xml": {},
    "application/vnd.dna": {
        "extensions": [
            "dna"
        ]
    },
    "application/vnd.document+json": {},
    "application/vnd.dolby.mlp": {
        "extensions": [
            "mlp"
        ]
    },
    "application/vnd.dolby.mobile.1": {},
    "application/vnd.dolby.mobile.2": {},
    "application/vnd.doremir.scorecloud-binary-document": {},
    "application/vnd.dpgraph": {
        "extensions": [
            "dpg"
        ]
    },
    "application/vnd.dreamfactory": {
        "extensions": [
            "dfac"
        ]
    },
    "application/vnd.drive+json": {},
    "application/vnd.ds-keypoint": {
        "extensions": [
            "kpxx"
        ]
    },
    "application/vnd.dtg.local": {},
    "application/vnd.dtg.local.flash": {},
    "application/vnd.dtg.local.html": {},
    "application/vnd.dvb.ait": {
        "extensions": [
            "ait"
        ]
    },
    "application/vnd.dvb.dvbj": {},
    "application/vnd.dvb.esgcontainer": {},
    "application/vnd.dvb.ipdcdftnotifaccess": {},
    "application/vnd.dvb.ipdcesgaccess": {},
    "application/vnd.dvb.ipdcesgaccess2": {},
    "application/vnd.dvb.ipdcesgpdd": {},
    "application/vnd.dvb.ipdcroaming": {},
    "application/vnd.dvb.iptv.alfec-base": {},
    "application/vnd.dvb.iptv.alfec-enhancement": {},
    "application/vnd.dvb.notif-aggregate-root+xml": {},
    "application/vnd.dvb.notif-container+xml": {},
    "application/vnd.dvb.notif-generic+xml": {},
    "application/vnd.dvb.notif-ia-msglist+xml": {},
    "application/vnd.dvb.notif-ia-registration-request+xml": {},
    "application/vnd.dvb.notif-ia-registration-response+xml": {},
    "application/vnd.dvb.notif-init+xml": {},
    "application/vnd.dvb.pfr": {},
    "application/vnd.dvb.service": {
        "extensions": [
            "svc"
        ]
    },
    "application/vnd.dxr": {},
    "application/vnd.dynageo": {
        "extensions": [
            "geo"
        ]
    },
    "application/vnd.dzr": {},
    "application/vnd.easykaraoke.cdgdownload": {},
    "application/vnd.ecdis-update": {},
    "application/vnd.ecowin.chart": {
        "extensions": [
            "mag"
        ]
    },
    "application/vnd.ecowin.filerequest": {},
    "application/vnd.ecowin.fileupdate": {},
    "application/vnd.ecowin.series": {},
    "application/vnd.ecowin.seriesrequest": {},
    "application/vnd.ecowin.seriesupdate": {},
    "application/vnd.emclient.accessrequest+xml": {},
    "application/vnd.enliven": {
        "extensions": [
            "nml"
        ]
    },
    "application/vnd.enphase.envoy": {},
    "application/vnd.eprints.data+xml": {},
    "application/vnd.epson.esf": {
        "extensions": [
            "esf"
        ]
    },
    "application/vnd.epson.msf": {
        "extensions": [
            "msf"
        ]
    },
    "application/vnd.epson.quickanime": {
        "extensions": [
            "qam"
        ]
    },
    "application/vnd.epson.salt": {
        "extensions": [
            "slt"
        ]
    },
    "application/vnd.epson.ssf": {
        "extensions": [
            "ssf"
        ]
    },
    "application/vnd.ericsson.quickcall": {},
    "application/vnd.espass-espass+zip": {},
    "application/vnd.eszigno3+xml": {
        "extensions": [
            "es3",
            "et3"
        ]
    },
    "application/vnd.etsi.aoc+xml": {},
    "application/vnd.etsi.asic-e+zip": {},
    "application/vnd.etsi.asic-s+zip": {},
    "application/vnd.etsi.cug+xml": {},
    "application/vnd.etsi.iptvcommand+xml": {},
    "application/vnd.etsi.iptvdiscovery+xml": {},
    "application/vnd.etsi.iptvprofile+xml": {},
    "application/vnd.etsi.iptvsad-bc+xml": {},
    "application/vnd.etsi.iptvsad-cod+xml": {},
    "application/vnd.etsi.iptvsad-npvr+xml": {},
    "application/vnd.etsi.iptvservice+xml": {},
    "application/vnd.etsi.iptvsync+xml": {},
    "application/vnd.etsi.iptvueprofile+xml": {},
    "application/vnd.etsi.mcid+xml": {},
    "application/vnd.etsi.mheg5": {},
    "application/vnd.etsi.overload-control-policy-dataset+xml": {},
    "application/vnd.etsi.pstn+xml": {},
    "application/vnd.etsi.sci+xml": {},
    "application/vnd.etsi.simservs+xml": {},
    "application/vnd.etsi.timestamp-token": {},
    "application/vnd.etsi.tsl+xml": {},
    "application/vnd.etsi.tsl.der": {},
    "application/vnd.eudora.data": {},
    "application/vnd.ezpix-album": {
        "extensions": [
            "ez2"
        ]
    },
    "application/vnd.ezpix-package": {
        "extensions": [
            "ez3"
        ]
    },
    "application/vnd.f-secure.mobile": {},
    "application/vnd.fastcopy-disk-image": {},
    "application/vnd.fdf": {
        "extensions": [
            "fdf"
        ]
    },
    "application/vnd.fdsn.mseed": {
        "extensions": [
            "mseed"
        ]
    },
    "application/vnd.fdsn.seed": {
        "extensions": [
            "seed",
            "dataless"
        ]
    },
    "application/vnd.ffsns": {},
    "application/vnd.filmit.zfc": {},
    "application/vnd.fints": {},
    "application/vnd.firemonkeys.cloudcell": {},
    "application/vnd.flographit": {
        "extensions": [
            "gph"
        ]
    },
    "application/vnd.fluxtime.clip": {
        "extensions": [
            "ftc"
        ]
    },
    "application/vnd.font-fontforge-sfd": {},
    "application/vnd.framemaker": {
        "extensions": [
            "fm",
            "frame",
            "maker",
            "book"
        ]
    },
    "application/vnd.frogans.fnc": {
        "extensions": [
            "fnc"
        ]
    },
    "application/vnd.frogans.ltf": {
        "extensions": [
            "ltf"
        ]
    },
    "application/vnd.fsc.weblaunch": {
        "extensions": [
            "fsc"
        ]
    },
    "application/vnd.fujitsu.oasys": {
        "extensions": [
            "oas"
        ]
    },
    "application/vnd.fujitsu.oasys2": {
        "extensions": [
            "oa2"
        ]
    },
    "application/vnd.fujitsu.oasys3": {
        "extensions": [
            "oa3"
        ]
    },
    "application/vnd.fujitsu.oasysgp": {
        "extensions": [
            "fg5"
        ]
    },
    "application/vnd.fujitsu.oasysprs": {
        "extensions": [
            "bh2"
        ]
    },
    "application/vnd.fujixerox.art-ex": {},
    "application/vnd.fujixerox.art4": {},
    "application/vnd.fujixerox.ddd": {
        "extensions": [
            "ddd"
        ]
    },
    "application/vnd.fujixerox.docuworks": {
        "extensions": [
            "xdw"
        ]
    },
    "application/vnd.fujixerox.docuworks.binder": {
        "extensions": [
            "xbd"
        ]
    },
    "application/vnd.fujixerox.docuworks.container": {},
    "application/vnd.fujixerox.hbpl": {},
    "application/vnd.fut-misnet": {},
    "application/vnd.fuzzysheet": {
        "extensions": [
            "fzs"
        ]
    },
    "application/vnd.genomatix.tuxedo": {
        "extensions": [
            "txd"
        ]
    },
    "application/vnd.geo+json": {},
    "application/vnd.geocube+xml": {},
    "application/vnd.geogebra.file": {
        "extensions": [
            "ggb"
        ]
    },
    "application/vnd.geogebra.tool": {
        "extensions": [
            "ggt"
        ]
    },
    "application/vnd.geometry-explorer": {
        "extensions": [
            "gex",
            "gre"
        ]
    },
    "application/vnd.geonext": {
        "extensions": [
            "gxt"
        ]
    },
    "application/vnd.geoplan": {
        "extensions": [
            "g2w"
        ]
    },
    "application/vnd.geospace": {
        "extensions": [
            "g3w"
        ]
    },
    "application/vnd.gerber": {},
    "application/vnd.globalplatform.card-content-mgt": {},
    "application/vnd.globalplatform.card-content-mgt-response": {},
    "application/vnd.gmx": {
        "extensions": [
            "gmx"
        ]
    },
    "application/vnd.google-apps.document": {
        "extensions": [
            "gdoc"
        ]
    },
    "application/vnd.google-apps.presentation": {
        "extensions": [
            "gslides"
        ]
    },
    "application/vnd.google-apps.spreadsheet": {
        "extensions": [
            "gsheet"
        ]
    },
    "application/vnd.google-earth.kml+xml": {
        "extensions": [
            "kml"
        ]
    },
    "application/vnd.google-earth.kmz": {
        "extensions": [
            "kmz"
        ]
    },
    "application/vnd.gov.sk.e-form+xml": {},
    "application/vnd.gov.sk.e-form+zip": {},
    "application/vnd.gov.sk.xmldatacontainer+xml": {},
    "application/vnd.grafeq": {
        "extensions": [
            "gqf",
            "gqs"
        ]
    },
    "application/vnd.gridmp": {},
    "application/vnd.groove-account": {
        "extensions": [
            "gac"
        ]
    },
    "application/vnd.groove-help": {
        "extensions": [
            "ghf"
        ]
    },
    "application/vnd.groove-identity-message": {
        "extensions": [
            "gim"
        ]
    },
    "application/vnd.groove-injector": {
        "extensions": [
            "grv"
        ]
    },
    "application/vnd.groove-tool-message": {
        "extensions": [
            "gtm"
        ]
    },
    "application/vnd.groove-tool-template": {
        "extensions": [
            "tpl"
        ]
    },
    "application/vnd.groove-vcard": {
        "extensions": [
            "vcg"
        ]
    },
    "application/vnd.hal+json": {},
    "application/vnd.hal+xml": {
        "extensions": [
            "hal"
        ]
    },
    "application/vnd.handheld-entertainment+xml": {
        "extensions": [
            "zmm"
        ]
    },
    "application/vnd.hbci": {
        "extensions": [
            "hbci"
        ]
    },
    "application/vnd.hc+json": {},
    "application/vnd.hcl-bireports": {},
    "application/vnd.hdt": {},
    "application/vnd.heroku+json": {},
    "application/vnd.hhe.lesson-player": {
        "extensions": [
            "les"
        ]
    },
    "application/vnd.hp-hpgl": {
        "extensions": [
            "hpgl"
        ]
    },
    "application/vnd.hp-hpid": {
        "extensions": [
            "hpid"
        ]
    },
    "application/vnd.hp-hps": {
        "extensions": [
            "hps"
        ]
    },
    "application/vnd.hp-jlyt": {
        "extensions": [
            "jlt"
        ]
    },
    "application/vnd.hp-pcl": {
        "extensions": [
            "pcl"
        ]
    },
    "application/vnd.hp-pclxl": {
        "extensions": [
            "pclxl"
        ]
    },
    "application/vnd.httphone": {},
    "application/vnd.hydrostatix.sof-data": {
        "extensions": [
            "sfd-hdstx"
        ]
    },
    "application/vnd.hyperdrive+json": {},
    "application/vnd.hzn-3d-crossword": {},
    "application/vnd.ibm.afplinedata": {},
    "application/vnd.ibm.electronic-media": {},
    "application/vnd.ibm.minipay": {
        "extensions": [
            "mpy"
        ]
    },
    "application/vnd.ibm.modcap": {
        "extensions": [
            "afp",
            "listafp",
            "list3820"
        ]
    },
    "application/vnd.ibm.rights-management": {
        "extensions": [
            "irm"
        ]
    },
    "application/vnd.ibm.secure-container": {
        "extensions": [
            "sc"
        ]
    },
    "application/vnd.iccprofile": {
        "extensions": [
            "icc",
            "icm"
        ]
    },
    "application/vnd.ieee.1905": {},
    "application/vnd.igloader": {
        "extensions": [
            "igl"
        ]
    },
    "application/vnd.immervision-ivp": {
        "extensions": [
            "ivp"
        ]
    },
    "application/vnd.immervision-ivu": {
        "extensions": [
            "ivu"
        ]
    },
    "application/vnd.ims.imsccv1p1": {},
    "application/vnd.ims.imsccv1p2": {},
    "application/vnd.ims.imsccv1p3": {},
    "application/vnd.ims.lis.v2.result+json": {},
    "application/vnd.ims.lti.v2.toolconsumerprofile+json": {},
    "application/vnd.ims.lti.v2.toolproxy+json": {},
    "application/vnd.ims.lti.v2.toolproxy.id+json": {},
    "application/vnd.ims.lti.v2.toolsettings+json": {},
    "application/vnd.ims.lti.v2.toolsettings.simple+json": {},
    "application/vnd.informedcontrol.rms+xml": {},
    "application/vnd.informix-visionary": {},
    "application/vnd.infotech.project": {},
    "application/vnd.infotech.project+xml": {},
    "application/vnd.innopath.wamp.notification": {},
    "application/vnd.insors.igm": {
        "extensions": [
            "igm"
        ]
    },
    "application/vnd.intercon.formnet": {
        "extensions": [
            "xpw",
            "xpx"
        ]
    },
    "application/vnd.intergeo": {
        "extensions": [
            "i2g"
        ]
    },
    "application/vnd.intertrust.digibox": {},
    "application/vnd.intertrust.nncp": {},
    "application/vnd.intu.qbo": {
        "extensions": [
            "qbo"
        ]
    },
    "application/vnd.intu.qfx": {
        "extensions": [
            "qfx"
        ]
    },
    "application/vnd.iptc.g2.catalogitem+xml": {},
    "application/vnd.iptc.g2.conceptitem+xml": {},
    "application/vnd.iptc.g2.knowledgeitem+xml": {},
    "application/vnd.iptc.g2.newsitem+xml": {},
    "application/vnd.iptc.g2.newsmessage+xml": {},
    "application/vnd.iptc.g2.packageitem+xml": {},
    "application/vnd.iptc.g2.planningitem+xml": {},
    "application/vnd.ipunplugged.rcprofile": {
        "extensions": [
            "rcprofile"
        ]
    },
    "application/vnd.irepository.package+xml": {
        "extensions": [
            "irp"
        ]
    },
    "application/vnd.is-xpr": {
        "extensions": [
            "xpr"
        ]
    },
    "application/vnd.isac.fcs": {
        "extensions": [
            "fcs"
        ]
    },
    "application/vnd.jam": {
        "extensions": [
            "jam"
        ]
    },
    "application/vnd.japannet-directory-service": {},
    "application/vnd.japannet-jpnstore-wakeup": {},
    "application/vnd.japannet-payment-wakeup": {},
    "application/vnd.japannet-registration": {},
    "application/vnd.japannet-registration-wakeup": {},
    "application/vnd.japannet-setstore-wakeup": {},
    "application/vnd.japannet-verification": {},
    "application/vnd.japannet-verification-wakeup": {},
    "application/vnd.jcp.javame.midlet-rms": {
        "extensions": [
            "rms"
        ]
    },
    "application/vnd.jisp": {
        "extensions": [
            "jisp"
        ]
    },
    "application/vnd.joost.joda-archive": {
        "extensions": [
            "joda"
        ]
    },
    "application/vnd.jsk.isdn-ngn": {},
    "application/vnd.kahootz": {
        "extensions": [
            "ktz",
            "ktr"
        ]
    },
    "application/vnd.kde.karbon": {
        "extensions": [
            "karbon"
        ]
    },
    "application/vnd.kde.kchart": {
        "extensions": [
            "chrt"
        ]
    },
    "application/vnd.kde.kformula": {
        "extensions": [
            "kfo"
        ]
    },
    "application/vnd.kde.kivio": {
        "extensions": [
            "flw"
        ]
    },
    "application/vnd.kde.kontour": {
        "extensions": [
            "kon"
        ]
    },
    "application/vnd.kde.kpresenter": {
        "extensions": [
            "kpr",
            "kpt"
        ]
    },
    "application/vnd.kde.kspread": {
        "extensions": [
            "ksp"
        ]
    },
    "application/vnd.kde.kword": {
        "extensions": [
            "kwd",
            "kwt"
        ]
    },
    "application/vnd.kenameaapp": {
        "extensions": [
            "htke"
        ]
    },
    "application/vnd.kidspiration": {
        "extensions": [
            "kia"
        ]
    },
    "application/vnd.kinar": {
        "extensions": [
            "kne",
            "knp"
        ]
    },
    "application/vnd.koan": {
        "extensions": [
            "skp",
            "skd",
            "skt",
            "skm"
        ]
    },
    "application/vnd.kodak-descriptor": {
        "extensions": [
            "sse"
        ]
    },
    "application/vnd.las.las+xml": {
        "extensions": [
            "lasxml"
        ]
    },
    "application/vnd.liberty-request+xml": {},
    "application/vnd.llamagraphics.life-balance.desktop": {
        "extensions": [
            "lbd"
        ]
    },
    "application/vnd.llamagraphics.life-balance.exchange+xml": {
        "extensions": [
            "lbe"
        ]
    },
    "application/vnd.lotus-1-2-3": {
        "extensions": [
            "123"
        ]
    },
    "application/vnd.lotus-approach": {
        "extensions": [
            "apr"
        ]
    },
    "application/vnd.lotus-freelance": {
        "extensions": [
            "pre"
        ]
    },
    "application/vnd.lotus-notes": {
        "extensions": [
            "nsf"
        ]
    },
    "application/vnd.lotus-organizer": {
        "extensions": [
            "org"
        ]
    },
    "application/vnd.lotus-screencam": {
        "extensions": [
            "scm"
        ]
    },
    "application/vnd.lotus-wordpro": {
        "extensions": [
            "lwp"
        ]
    },
    "application/vnd.macports.portpkg": {
        "extensions": [
            "portpkg"
        ]
    },
    "application/vnd.mapbox-vector-tile": {},
    "application/vnd.marlin.drm.actiontoken+xml": {},
    "application/vnd.marlin.drm.conftoken+xml": {},
    "application/vnd.marlin.drm.license+xml": {},
    "application/vnd.marlin.drm.mdcf": {},
    "application/vnd.mason+json": {},
    "application/vnd.maxmind.maxmind-db": {},
    "application/vnd.mcd": {
        "extensions": [
            "mcd"
        ]
    },
    "application/vnd.medcalcdata": {
        "extensions": [
            "mc1"
        ]
    },
    "application/vnd.mediastation.cdkey": {
        "extensions": [
            "cdkey"
        ]
    },
    "application/vnd.meridian-slingshot": {},
    "application/vnd.mfer": {
        "extensions": [
            "mwf"
        ]
    },
    "application/vnd.mfmp": {
        "extensions": [
            "mfm"
        ]
    },
    "application/vnd.micro+json": {},
    "application/vnd.micrografx.flo": {
        "extensions": [
            "flo"
        ]
    },
    "application/vnd.micrografx.igx": {
        "extensions": [
            "igx"
        ]
    },
    "application/vnd.microsoft.portable-executable": {},
    "application/vnd.miele+json": {},
    "application/vnd.mif": {
        "extensions": [
            "mif"
        ]
    },
    "application/vnd.minisoft-hp3000-save": {},
    "application/vnd.mitsubishi.misty-guard.trustweb": {},
    "application/vnd.mobius.daf": {
        "extensions": [
            "daf"
        ]
    },
    "application/vnd.mobius.dis": {
        "extensions": [
            "dis"
        ]
    },
    "application/vnd.mobius.mbk": {
        "extensions": [
            "mbk"
        ]
    },
    "application/vnd.mobius.mqy": {
        "extensions": [
            "mqy"
        ]
    },
    "application/vnd.mobius.msl": {
        "extensions": [
            "msl"
        ]
    },
    "application/vnd.mobius.plc": {
        "extensions": [
            "plc"
        ]
    },
    "application/vnd.mobius.txf": {
        "extensions": [
            "txf"
        ]
    },
    "application/vnd.mophun.application": {
        "extensions": [
            "mpn"
        ]
    },
    "application/vnd.mophun.certificate": {
        "extensions": [
            "mpc"
        ]
    },
    "application/vnd.motorola.flexsuite": {},
    "application/vnd.motorola.flexsuite.adsi": {},
    "application/vnd.motorola.flexsuite.fis": {},
    "application/vnd.motorola.flexsuite.gotap": {},
    "application/vnd.motorola.flexsuite.kmr": {},
    "application/vnd.motorola.flexsuite.ttc": {},
    "application/vnd.motorola.flexsuite.wem": {},
    "application/vnd.motorola.iprm": {},
    "application/vnd.mozilla.xul+xml": {
        "extensions": [
            "xul"
        ]
    },
    "application/vnd.ms-3mfdocument": {},
    "application/vnd.ms-artgalry": {
        "extensions": [
            "cil"
        ]
    },
    "application/vnd.ms-asf": {},
    "application/vnd.ms-cab-compressed": {
        "extensions": [
            "cab"
        ]
    },
    "application/vnd.ms-color.iccprofile": {},
    "application/vnd.ms-excel": {
        "extensions": [
            "xls",
            "xlm",
            "xla",
            "xlc",
            "xlt",
            "xlw"
        ]
    },
    "application/vnd.ms-excel.addin.macroenabled.12": {
        "extensions": [
            "xlam"
        ]
    },
    "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
        "extensions": [
            "xlsb"
        ]
    },
    "application/vnd.ms-excel.sheet.macroenabled.12": {
        "extensions": [
            "xlsm"
        ]
    },
    "application/vnd.ms-excel.template.macroenabled.12": {
        "extensions": [
            "xltm"
        ]
    },
    "application/vnd.ms-fontobject": {
        "extensions": [
            "eot"
        ]
    },
    "application/vnd.ms-htmlhelp": {
        "extensions": [
            "chm"
        ]
    },
    "application/vnd.ms-ims": {
        "extensions": [
            "ims"
        ]
    },
    "application/vnd.ms-lrm": {
        "extensions": [
            "lrm"
        ]
    },
    "application/vnd.ms-office.activex+xml": {},
    "application/vnd.ms-officetheme": {
        "extensions": [
            "thmx"
        ]
    },
    "application/vnd.ms-opentype": {},
    "application/vnd.ms-package.obfuscated-opentype": {},
    "application/vnd.ms-pki.seccat": {
        "extensions": [
            "cat"
        ]
    },
    "application/vnd.ms-pki.stl": {
        "extensions": [
            "stl"
        ]
    },
    "application/vnd.ms-playready.initiator+xml": {},
    "application/vnd.ms-powerpoint": {
        "extensions": [
            "ppt",
            "pps",
            "pot"
        ]
    },
    "application/vnd.ms-powerpoint.addin.macroenabled.12": {
        "extensions": [
            "ppam"
        ]
    },
    "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
        "extensions": [
            "pptm"
        ]
    },
    "application/vnd.ms-powerpoint.slide.macroenabled.12": {
        "extensions": [
            "sldm"
        ]
    },
    "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
        "extensions": [
            "ppsm"
        ]
    },
    "application/vnd.ms-powerpoint.template.macroenabled.12": {
        "extensions": [
            "potm"
        ]
    },
    "application/vnd.ms-printdevicecapabilities+xml": {},
    "application/vnd.ms-printing.printticket+xml": {},
    "application/vnd.ms-printschematicket+xml": {},
    "application/vnd.ms-project": {
        "extensions": [
            "mpp",
            "mpt"
        ]
    },
    "application/vnd.ms-tnef": {},
    "application/vnd.ms-windows.devicepairing": {},
    "application/vnd.ms-windows.nwprinting.oob": {},
    "application/vnd.ms-windows.printerpairing": {},
    "application/vnd.ms-windows.wsd.oob": {},
    "application/vnd.ms-wmdrm.lic-chlg-req": {},
    "application/vnd.ms-wmdrm.lic-resp": {},
    "application/vnd.ms-wmdrm.meter-chlg-req": {},
    "application/vnd.ms-wmdrm.meter-resp": {},
    "application/vnd.ms-word.document.macroenabled.12": {
        "extensions": [
            "docm"
        ]
    },
    "application/vnd.ms-word.template.macroenabled.12": {
        "extensions": [
            "dotm"
        ]
    },
    "application/vnd.ms-works": {
        "extensions": [
            "wps",
            "wks",
            "wcm",
            "wdb"
        ]
    },
    "application/vnd.ms-wpl": {
        "extensions": [
            "wpl"
        ]
    },
    "application/vnd.ms-xpsdocument": {
        "extensions": [
            "xps"
        ]
    },
    "application/vnd.msa-disk-image": {},
    "application/vnd.mseq": {
        "extensions": [
            "mseq"
        ]
    },
    "application/vnd.msign": {},
    "application/vnd.multiad.creator": {},
    "application/vnd.multiad.creator.cif": {},
    "application/vnd.music-niff": {},
    "application/vnd.musician": {
        "extensions": [
            "mus"
        ]
    },
    "application/vnd.muvee.style": {
        "extensions": [
            "msty"
        ]
    },
    "application/vnd.mynfc": {
        "extensions": [
            "taglet"
        ]
    },
    "application/vnd.ncd.control": {},
    "application/vnd.ncd.reference": {},
    "application/vnd.nearst.inv+json": {},
    "application/vnd.nervana": {},
    "application/vnd.netfpx": {},
    "application/vnd.neurolanguage.nlu": {
        "extensions": [
            "nlu"
        ]
    },
    "application/vnd.nintendo.nitro.rom": {},
    "application/vnd.nintendo.snes.rom": {},
    "application/vnd.nitf": {
        "extensions": [
            "ntf",
            "nitf"
        ]
    },
    "application/vnd.noblenet-directory": {
        "extensions": [
            "nnd"
        ]
    },
    "application/vnd.noblenet-sealer": {
        "extensions": [
            "nns"
        ]
    },
    "application/vnd.noblenet-web": {
        "extensions": [
            "nnw"
        ]
    },
    "application/vnd.nokia.catalogs": {},
    "application/vnd.nokia.conml+wbxml": {},
    "application/vnd.nokia.conml+xml": {},
    "application/vnd.nokia.iptv.config+xml": {},
    "application/vnd.nokia.isds-radio-presets": {},
    "application/vnd.nokia.landmark+wbxml": {},
    "application/vnd.nokia.landmark+xml": {},
    "application/vnd.nokia.landmarkcollection+xml": {},
    "application/vnd.nokia.n-gage.ac+xml": {},
    "application/vnd.nokia.n-gage.data": {
        "extensions": [
            "ngdat"
        ]
    },
    "application/vnd.nokia.n-gage.symbian.install": {
        "extensions": [
            "n-gage"
        ]
    },
    "application/vnd.nokia.ncd": {},
    "application/vnd.nokia.pcd+wbxml": {},
    "application/vnd.nokia.pcd+xml": {},
    "application/vnd.nokia.radio-preset": {
        "extensions": [
            "rpst"
        ]
    },
    "application/vnd.nokia.radio-presets": {
        "extensions": [
            "rpss"
        ]
    },
    "application/vnd.novadigm.edm": {
        "extensions": [
            "edm"
        ]
    },
    "application/vnd.novadigm.edx": {
        "extensions": [
            "edx"
        ]
    },
    "application/vnd.novadigm.ext": {
        "extensions": [
            "ext"
        ]
    },
    "application/vnd.ntt-local.content-share": {},
    "application/vnd.ntt-local.file-transfer": {},
    "application/vnd.ntt-local.ogw_remote-access": {},
    "application/vnd.ntt-local.sip-ta_remote": {},
    "application/vnd.ntt-local.sip-ta_tcp_stream": {},
    "application/vnd.oasis.opendocument.chart": {
        "extensions": [
            "odc"
        ]
    },
    "application/vnd.oasis.opendocument.chart-template": {
        "extensions": [
            "otc"
        ]
    },
    "application/vnd.oasis.opendocument.database": {
        "extensions": [
            "odb"
        ]
    },
    "application/vnd.oasis.opendocument.formula": {
        "extensions": [
            "odf"
        ]
    },
    "application/vnd.oasis.opendocument.formula-template": {
        "extensions": [
            "odft"
        ]
    },
    "application/vnd.oasis.opendocument.graphics": {
        "extensions": [
            "odg"
        ]
    },
    "application/vnd.oasis.opendocument.graphics-template": {
        "extensions": [
            "otg"
        ]
    },
    "application/vnd.oasis.opendocument.image": {
        "extensions": [
            "odi"
        ]
    },
    "application/vnd.oasis.opendocument.image-template": {
        "extensions": [
            "oti"
        ]
    },
    "application/vnd.oasis.opendocument.presentation": {
        "extensions": [
            "odp"
        ]
    },
    "application/vnd.oasis.opendocument.presentation-template": {
        "extensions": [
            "otp"
        ]
    },
    "application/vnd.oasis.opendocument.spreadsheet": {
        "extensions": [
            "ods"
        ]
    },
    "application/vnd.oasis.opendocument.spreadsheet-template": {
        "extensions": [
            "ots"
        ]
    },
    "application/vnd.oasis.opendocument.text": {
        "extensions": [
            "odt"
        ]
    },
    "application/vnd.oasis.opendocument.text-master": {
        "extensions": [
            "odm"
        ]
    },
    "application/vnd.oasis.opendocument.text-template": {
        "extensions": [
            "ott"
        ]
    },
    "application/vnd.oasis.opendocument.text-web": {
        "extensions": [
            "oth"
        ]
    },
    "application/vnd.obn": {},
    "application/vnd.oftn.l10n+json": {},
    "application/vnd.oipf.contentaccessdownload+xml": {},
    "application/vnd.oipf.contentaccessstreaming+xml": {},
    "application/vnd.oipf.cspg-hexbinary": {},
    "application/vnd.oipf.dae.svg+xml": {},
    "application/vnd.oipf.dae.xhtml+xml": {},
    "application/vnd.oipf.mippvcontrolmessage+xml": {},
    "application/vnd.oipf.pae.gem": {},
    "application/vnd.oipf.spdiscovery+xml": {},
    "application/vnd.oipf.spdlist+xml": {},
    "application/vnd.oipf.ueprofile+xml": {},
    "application/vnd.oipf.userprofile+xml": {},
    "application/vnd.olpc-sugar": {
        "extensions": [
            "xo"
        ]
    },
    "application/vnd.oma-scws-config": {},
    "application/vnd.oma-scws-http-request": {},
    "application/vnd.oma-scws-http-response": {},
    "application/vnd.oma.bcast.associated-procedure-parameter+xml": {},
    "application/vnd.oma.bcast.drm-trigger+xml": {},
    "application/vnd.oma.bcast.imd+xml": {},
    "application/vnd.oma.bcast.ltkm": {},
    "application/vnd.oma.bcast.notification+xml": {},
    "application/vnd.oma.bcast.provisioningtrigger": {},
    "application/vnd.oma.bcast.sgboot": {},
    "application/vnd.oma.bcast.sgdd+xml": {},
    "application/vnd.oma.bcast.sgdu": {},
    "application/vnd.oma.bcast.simple-symbol-container": {},
    "application/vnd.oma.bcast.smartcard-trigger+xml": {},
    "application/vnd.oma.bcast.sprov+xml": {},
    "application/vnd.oma.bcast.stkm": {},
    "application/vnd.oma.cab-address-book+xml": {},
    "application/vnd.oma.cab-feature-handler+xml": {},
    "application/vnd.oma.cab-pcc+xml": {},
    "application/vnd.oma.cab-subs-invite+xml": {},
    "application/vnd.oma.cab-user-prefs+xml": {},
    "application/vnd.oma.dcd": {},
    "application/vnd.oma.dcdc": {},
    "application/vnd.oma.dd2+xml": {
        "extensions": [
            "dd2"
        ]
    },
    "application/vnd.oma.drm.risd+xml": {},
    "application/vnd.oma.group-usage-list+xml": {},
    "application/vnd.oma.lwm2m+json": {},
    "application/vnd.oma.lwm2m+tlv": {},
    "application/vnd.oma.pal+xml": {},
    "application/vnd.oma.poc.detailed-progress-report+xml": {},
    "application/vnd.oma.poc.final-report+xml": {},
    "application/vnd.oma.poc.groups+xml": {},
    "application/vnd.oma.poc.invocation-descriptor+xml": {},
    "application/vnd.oma.poc.optimized-progress-report+xml": {},
    "application/vnd.oma.push": {},
    "application/vnd.oma.scidm.messages+xml": {},
    "application/vnd.oma.xcap-directory+xml": {},
    "application/vnd.omads-email+xml": {},
    "application/vnd.omads-file+xml": {},
    "application/vnd.omads-folder+xml": {},
    "application/vnd.omaloc-supl-init": {},
    "application/vnd.onepager": {},
    "application/vnd.openblox.game+xml": {},
    "application/vnd.openblox.game-binary": {},
    "application/vnd.openeye.oeb": {},
    "application/vnd.openofficeorg.extension": {
        "extensions": [
            "oxt"
        ]
    },
    "application/vnd.openstreetmap.data+xml": {},
    "application/vnd.openxmlformats-officedocument.custom-properties+xml": {},
    "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {},
    "application/vnd.openxmlformats-officedocument.drawing+xml": {},
    "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {},
    "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {},
    "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {},
    "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {},
    "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {},
    "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {},
    "application/vnd.openxmlformats-officedocument.extended-properties+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml-template": {},
    "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
        "extensions": [
            "pptx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml.slide": {
        "extensions": [
            "sldx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
        "extensions": [
            "ppsx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml.template": {
        "extensions": [
            "potx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {},
    "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml-template": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
        "extensions": [
            "xlsx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
        "extensions": [
            "xltx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {},
    "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {},
    "application/vnd.openxmlformats-officedocument.theme+xml": {},
    "application/vnd.openxmlformats-officedocument.themeoverride+xml": {},
    "application/vnd.openxmlformats-officedocument.vmldrawing": {},
    "application/vnd.openxmlformats-officedocument.wordprocessingml-template": {},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
        "extensions": [
            "docx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
        "extensions": [
            "dotx"
        ]
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {},
    "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {},
    "application/vnd.openxmlformats-package.core-properties+xml": {},
    "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {},
    "application/vnd.openxmlformats-package.relationships+xml": {},
    "application/vnd.oracle.resource+json": {},
    "application/vnd.orange.indata": {},
    "application/vnd.osa.netdeploy": {},
    "application/vnd.osgeo.mapguide.package": {
        "extensions": [
            "mgp"
        ]
    },
    "application/vnd.osgi.bundle": {},
    "application/vnd.osgi.dp": {
        "extensions": [
            "dp"
        ]
    },
    "application/vnd.osgi.subsystem": {
        "extensions": [
            "esa"
        ]
    },
    "application/vnd.otps.ct-kip+xml": {},
    "application/vnd.oxli.countgraph": {},
    "application/vnd.pagerduty+json": {},
    "application/vnd.palm": {
        "extensions": [
            "pdb",
            "pqa",
            "oprc"
        ]
    },
    "application/vnd.panoply": {},
    "application/vnd.paos+xml": {},
    "application/vnd.paos.xml": {},
    "application/vnd.pawaafile": {
        "extensions": [
            "paw"
        ]
    },
    "application/vnd.pcos": {},
    "application/vnd.pg.format": {
        "extensions": [
            "str"
        ]
    },
    "application/vnd.pg.osasli": {
        "extensions": [
            "ei6"
        ]
    },
    "application/vnd.piaccess.application-licence": {},
    "application/vnd.picsel": {
        "extensions": [
            "efif"
        ]
    },
    "application/vnd.pmi.widget": {
        "extensions": [
            "wg"
        ]
    },
    "application/vnd.poc.group-advertisement+xml": {},
    "application/vnd.pocketlearn": {
        "extensions": [
            "plf"
        ]
    },
    "application/vnd.powerbuilder6": {
        "extensions": [
            "pbd"
        ]
    },
    "application/vnd.powerbuilder6-s": {},
    "application/vnd.powerbuilder7": {},
    "application/vnd.powerbuilder7-s": {},
    "application/vnd.powerbuilder75": {},
    "application/vnd.powerbuilder75-s": {},
    "application/vnd.preminet": {},
    "application/vnd.previewsystems.box": {
        "extensions": [
            "box"
        ]
    },
    "application/vnd.proteus.magazine": {
        "extensions": [
            "mgz"
        ]
    },
    "application/vnd.publishare-delta-tree": {
        "extensions": [
            "qps"
        ]
    },
    "application/vnd.pvi.ptid1": {
        "extensions": [
            "ptid"
        ]
    },
    "application/vnd.pwg-multiplexed": {},
    "application/vnd.pwg-xhtml-print+xml": {},
    "application/vnd.qualcomm.brew-app-res": {},
    "application/vnd.quarantainenet": {},
    "application/vnd.quark.quarkxpress": {
        "extensions": [
            "qxd",
            "qxt",
            "qwd",
            "qwt",
            "qxl",
            "qxb"
        ]
    },
    "application/vnd.quobject-quoxdocument": {},
    "application/vnd.radisys.moml+xml": {},
    "application/vnd.radisys.msml+xml": {},
    "application/vnd.radisys.msml-audit+xml": {},
    "application/vnd.radisys.msml-audit-conf+xml": {},
    "application/vnd.radisys.msml-audit-conn+xml": {},
    "application/vnd.radisys.msml-audit-dialog+xml": {},
    "application/vnd.radisys.msml-audit-stream+xml": {},
    "application/vnd.radisys.msml-conf+xml": {},
    "application/vnd.radisys.msml-dialog+xml": {},
    "application/vnd.radisys.msml-dialog-base+xml": {},
    "application/vnd.radisys.msml-dialog-fax-detect+xml": {},
    "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {},
    "application/vnd.radisys.msml-dialog-group+xml": {},
    "application/vnd.radisys.msml-dialog-speech+xml": {},
    "application/vnd.radisys.msml-dialog-transform+xml": {},
    "application/vnd.rainstor.data": {},
    "application/vnd.rapid": {},
    "application/vnd.rar": {},
    "application/vnd.realvnc.bed": {
        "extensions": [
            "bed"
        ]
    },
    "application/vnd.recordare.musicxml": {
        "extensions": [
            "mxl"
        ]
    },
    "application/vnd.recordare.musicxml+xml": {
        "extensions": [
            "musicxml"
        ]
    },
    "application/vnd.renlearn.rlprint": {},
    "application/vnd.rig.cryptonote": {
        "extensions": [
            "cryptonote"
        ]
    },
    "application/vnd.rim.cod": {
        "extensions": [
            "cod"
        ]
    },
    "application/vnd.rn-realmedia": {
        "extensions": [
            "rm"
        ]
    },
    "application/vnd.rn-realmedia-vbr": {
        "extensions": [
            "rmvb"
        ]
    },
    "application/vnd.route66.link66+xml": {
        "extensions": [
            "link66"
        ]
    },
    "application/vnd.rs-274x": {},
    "application/vnd.ruckus.download": {},
    "application/vnd.s3sms": {},
    "application/vnd.sailingtracker.track": {
        "extensions": [
            "st"
        ]
    },
    "application/vnd.sbm.cid": {},
    "application/vnd.sbm.mid2": {},
    "application/vnd.scribus": {},
    "application/vnd.sealed.3df": {},
    "application/vnd.sealed.csf": {},
    "application/vnd.sealed.doc": {},
    "application/vnd.sealed.eml": {},
    "application/vnd.sealed.mht": {},
    "application/vnd.sealed.net": {},
    "application/vnd.sealed.ppt": {},
    "application/vnd.sealed.tiff": {},
    "application/vnd.sealed.xls": {},
    "application/vnd.sealedmedia.softseal.html": {},
    "application/vnd.sealedmedia.softseal.pdf": {},
    "application/vnd.seemail": {
        "extensions": [
            "see"
        ]
    },
    "application/vnd.sema": {
        "extensions": [
            "sema"
        ]
    },
    "application/vnd.semd": {
        "extensions": [
            "semd"
        ]
    },
    "application/vnd.semf": {
        "extensions": [
            "semf"
        ]
    },
    "application/vnd.shana.informed.formdata": {
        "extensions": [
            "ifm"
        ]
    },
    "application/vnd.shana.informed.formtemplate": {
        "extensions": [
            "itp"
        ]
    },
    "application/vnd.shana.informed.interchange": {
        "extensions": [
            "iif"
        ]
    },
    "application/vnd.shana.informed.package": {
        "extensions": [
            "ipk"
        ]
    },
    "application/vnd.simtech-mindmapper": {
        "extensions": [
            "twd",
            "twds"
        ]
    },
    "application/vnd.siren+json": {},
    "application/vnd.smaf": {
        "extensions": [
            "mmf"
        ]
    },
    "application/vnd.smart.notebook": {},
    "application/vnd.smart.teacher": {
        "extensions": [
            "teacher"
        ]
    },
    "application/vnd.software602.filler.form+xml": {},
    "application/vnd.software602.filler.form-xml-zip": {},
    "application/vnd.solent.sdkm+xml": {
        "extensions": [
            "sdkm",
            "sdkd"
        ]
    },
    "application/vnd.spotfire.dxp": {
        "extensions": [
            "dxp"
        ]
    },
    "application/vnd.spotfire.sfs": {
        "extensions": [
            "sfs"
        ]
    },
    "application/vnd.sss-cod": {},
    "application/vnd.sss-dtf": {},
    "application/vnd.sss-ntf": {},
    "application/vnd.stardivision.calc": {
        "extensions": [
            "sdc"
        ]
    },
    "application/vnd.stardivision.draw": {
        "extensions": [
            "sda"
        ]
    },
    "application/vnd.stardivision.impress": {
        "extensions": [
            "sdd"
        ]
    },
    "application/vnd.stardivision.math": {
        "extensions": [
            "smf"
        ]
    },
    "application/vnd.stardivision.writer": {
        "extensions": [
            "sdw",
            "vor"
        ]
    },
    "application/vnd.stardivision.writer-global": {
        "extensions": [
            "sgl"
        ]
    },
    "application/vnd.stepmania.package": {
        "extensions": [
            "smzip"
        ]
    },
    "application/vnd.stepmania.stepchart": {
        "extensions": [
            "sm"
        ]
    },
    "application/vnd.street-stream": {},
    "application/vnd.sun.wadl+xml": {},
    "application/vnd.sun.xml.calc": {
        "extensions": [
            "sxc"
        ]
    },
    "application/vnd.sun.xml.calc.template": {
        "extensions": [
            "stc"
        ]
    },
    "application/vnd.sun.xml.draw": {
        "extensions": [
            "sxd"
        ]
    },
    "application/vnd.sun.xml.draw.template": {
        "extensions": [
            "std"
        ]
    },
    "application/vnd.sun.xml.impress": {
        "extensions": [
            "sxi"
        ]
    },
    "application/vnd.sun.xml.impress.template": {
        "extensions": [
            "sti"
        ]
    },
    "application/vnd.sun.xml.math": {
        "extensions": [
            "sxm"
        ]
    },
    "application/vnd.sun.xml.writer": {
        "extensions": [
            "sxw"
        ]
    },
    "application/vnd.sun.xml.writer.global": {
        "extensions": [
            "sxg"
        ]
    },
    "application/vnd.sun.xml.writer.template": {
        "extensions": [
            "stw"
        ]
    },
    "application/vnd.sus-calendar": {
        "extensions": [
            "sus",
            "susp"
        ]
    },
    "application/vnd.svd": {
        "extensions": [
            "svd"
        ]
    },
    "application/vnd.swiftview-ics": {},
    "application/vnd.symbian.install": {
        "extensions": [
            "sis",
            "sisx"
        ]
    },
    "application/vnd.syncml+xml": {
        "extensions": [
            "xsm"
        ]
    },
    "application/vnd.syncml.dm+wbxml": {
        "extensions": [
            "bdm"
        ]
    },
    "application/vnd.syncml.dm+xml": {
        "extensions": [
            "xdm"
        ]
    },
    "application/vnd.syncml.dm.notification": {},
    "application/vnd.syncml.dmddf+wbxml": {},
    "application/vnd.syncml.dmddf+xml": {},
    "application/vnd.syncml.dmtnds+wbxml": {},
    "application/vnd.syncml.dmtnds+xml": {},
    "application/vnd.syncml.ds.notification": {},
    "application/vnd.tableschema+json": {},
    "application/vnd.tao.intent-module-archive": {
        "extensions": [
            "tao"
        ]
    },
    "application/vnd.tcpdump.pcap": {
        "extensions": [
            "pcap",
            "cap",
            "dmp"
        ]
    },
    "application/vnd.tmd.mediaflex.api+xml": {},
    "application/vnd.tml": {},
    "application/vnd.tmobile-livetv": {
        "extensions": [
            "tmo"
        ]
    },
    "application/vnd.tri.onesource": {},
    "application/vnd.trid.tpt": {
        "extensions": [
            "tpt"
        ]
    },
    "application/vnd.triscape.mxs": {
        "extensions": [
            "mxs"
        ]
    },
    "application/vnd.trueapp": {
        "extensions": [
            "tra"
        ]
    },
    "application/vnd.truedoc": {},
    "application/vnd.ubisoft.webplayer": {},
    "application/vnd.ufdl": {
        "extensions": [
            "ufd",
            "ufdl"
        ]
    },
    "application/vnd.uiq.theme": {
        "extensions": [
            "utz"
        ]
    },
    "application/vnd.umajin": {
        "extensions": [
            "umj"
        ]
    },
    "application/vnd.unity": {
        "extensions": [
            "unityweb"
        ]
    },
    "application/vnd.uoml+xml": {
        "extensions": [
            "uoml"
        ]
    },
    "application/vnd.uplanet.alert": {},
    "application/vnd.uplanet.alert-wbxml": {},
    "application/vnd.uplanet.bearer-choice": {},
    "application/vnd.uplanet.bearer-choice-wbxml": {},
    "application/vnd.uplanet.cacheop": {},
    "application/vnd.uplanet.cacheop-wbxml": {},
    "application/vnd.uplanet.channel": {},
    "application/vnd.uplanet.channel-wbxml": {},
    "application/vnd.uplanet.list": {},
    "application/vnd.uplanet.list-wbxml": {},
    "application/vnd.uplanet.listcmd": {},
    "application/vnd.uplanet.listcmd-wbxml": {},
    "application/vnd.uplanet.signal": {},
    "application/vnd.uri-map": {},
    "application/vnd.valve.source.material": {},
    "application/vnd.vcx": {
        "extensions": [
            "vcx"
        ]
    },
    "application/vnd.vd-study": {},
    "application/vnd.vectorworks": {},
    "application/vnd.vel+json": {},
    "application/vnd.verimatrix.vcas": {},
    "application/vnd.vidsoft.vidconference": {},
    "application/vnd.visio": {
        "extensions": [
            "vsd",
            "vst",
            "vss",
            "vsw"
        ]
    },
    "application/vnd.visionary": {
        "extensions": [
            "vis"
        ]
    },
    "application/vnd.vividence.scriptfile": {},
    "application/vnd.vsf": {
        "extensions": [
            "vsf"
        ]
    },
    "application/vnd.wap.sic": {},
    "application/vnd.wap.slc": {},
    "application/vnd.wap.wbxml": {
        "extensions": [
            "wbxml"
        ]
    },
    "application/vnd.wap.wmlc": {
        "extensions": [
            "wmlc"
        ]
    },
    "application/vnd.wap.wmlscriptc": {
        "extensions": [
            "wmlsc"
        ]
    },
    "application/vnd.webturbo": {
        "extensions": [
            "wtb"
        ]
    },
    "application/vnd.wfa.p2p": {},
    "application/vnd.wfa.wsc": {},
    "application/vnd.windows.devicepairing": {},
    "application/vnd.wmc": {},
    "application/vnd.wmf.bootstrap": {},
    "application/vnd.wolfram.mathematica": {},
    "application/vnd.wolfram.mathematica.package": {},
    "application/vnd.wolfram.player": {
        "extensions": [
            "nbp"
        ]
    },
    "application/vnd.wordperfect": {
        "extensions": [
            "wpd"
        ]
    },
    "application/vnd.wqd": {
        "extensions": [
            "wqd"
        ]
    },
    "application/vnd.wrq-hp3000-labelled": {},
    "application/vnd.wt.stf": {
        "extensions": [
            "stf"
        ]
    },
    "application/vnd.wv.csp+wbxml": {},
    "application/vnd.wv.csp+xml": {},
    "application/vnd.wv.ssp+xml": {},
    "application/vnd.xacml+json": {},
    "application/vnd.xara": {
        "extensions": [
            "xar"
        ]
    },
    "application/vnd.xfdl": {
        "extensions": [
            "xfdl"
        ]
    },
    "application/vnd.xfdl.webform": {},
    "application/vnd.xmi+xml": {},
    "application/vnd.xmpie.cpkg": {},
    "application/vnd.xmpie.dpkg": {},
    "application/vnd.xmpie.plan": {},
    "application/vnd.xmpie.ppkg": {},
    "application/vnd.xmpie.xlim": {},
    "application/vnd.yamaha.hv-dic": {
        "extensions": [
            "hvd"
        ]
    },
    "application/vnd.yamaha.hv-script": {
        "extensions": [
            "hvs"
        ]
    },
    "application/vnd.yamaha.hv-voice": {
        "extensions": [
            "hvp"
        ]
    },
    "application/vnd.yamaha.openscoreformat": {
        "extensions": [
            "osf"
        ]
    },
    "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
        "extensions": [
            "osfpvg"
        ]
    },
    "application/vnd.yamaha.remote-setup": {},
    "application/vnd.yamaha.smaf-audio": {
        "extensions": [
            "saf"
        ]
    },
    "application/vnd.yamaha.smaf-phrase": {
        "extensions": [
            "spf"
        ]
    },
    "application/vnd.yamaha.through-ngn": {},
    "application/vnd.yamaha.tunnel-udpencap": {},
    "application/vnd.yaoweme": {},
    "application/vnd.yellowriver-custom-menu": {
        "extensions": [
            "cmp"
        ]
    },
    "application/vnd.zul": {
        "extensions": [
            "zir",
            "zirz"
        ]
    },
    "application/vnd.zzazz.deck+xml": {
        "extensions": [
            "zaz"
        ]
    },
    "application/voicexml+xml": {
        "extensions": [
            "vxml"
        ]
    },
    "application/vq-rtcpxr": {},
    "application/watcherinfo+xml": {},
    "application/whoispp-query": {},
    "application/whoispp-response": {},
    "application/widget": {
        "extensions": [
            "wgt"
        ]
    },
    "application/winhlp": {
        "extensions": [
            "hlp"
        ]
    },
    "application/wita": {},
    "application/wordperfect5.1": {},
    "application/wsdl+xml": {
        "extensions": [
            "wsdl"
        ]
    },
    "application/wspolicy+xml": {
        "extensions": [
            "wspolicy"
        ]
    },
    "application/x-7z-compressed": {
        "extensions": [
            "7z"
        ]
    },
    "application/x-abiword": {
        "extensions": [
            "abw"
        ]
    },
    "application/x-ace-compressed": {
        "extensions": [
            "ace"
        ]
    },
    "application/x-amf": {},
    "application/x-apple-diskimage": {
        "extensions": [
            "dmg"
        ]
    },
    "application/x-authorware-bin": {
        "extensions": [
            "aab",
            "x32",
            "u32",
            "vox"
        ]
    },
    "application/x-authorware-map": {
        "extensions": [
            "aam"
        ]
    },
    "application/x-authorware-seg": {
        "extensions": [
            "aas"
        ]
    },
    "application/x-bcpio": {
        "extensions": [
            "bcpio"
        ]
    },
    "application/x-bdoc": {
        "extensions": [
            "bdoc"
        ]
    },
    "application/x-bittorrent": {
        "extensions": [
            "torrent"
        ]
    },
    "application/x-blorb": {
        "extensions": [
            "blb",
            "blorb"
        ]
    },
    "application/x-bzip": {
        "extensions": [
            "bz"
        ]
    },
    "application/x-bzip2": {
        "extensions": [
            "bz2",
            "boz"
        ]
    },
    "application/x-cbr": {
        "extensions": [
            "cbr",
            "cba",
            "cbt",
            "cbz",
            "cb7"
        ]
    },
    "application/x-cdlink": {
        "extensions": [
            "vcd"
        ]
    },
    "application/x-cfs-compressed": {
        "extensions": [
            "cfs"
        ]
    },
    "application/x-chat": {
        "extensions": [
            "chat"
        ]
    },
    "application/x-chess-pgn": {
        "extensions": [
            "pgn"
        ]
    },
    "application/x-chrome-extension": {
        "extensions": [
            "crx"
        ]
    },
    "application/x-cocoa": {
        "extensions": [
            "cco"
        ]
    },
    "application/x-compress": {},
    "application/x-conference": {
        "extensions": [
            "nsc"
        ]
    },
    "application/x-cpio": {
        "extensions": [
            "cpio"
        ]
    },
    "application/x-csh": {
        "extensions": [
            "csh"
        ]
    },
    "application/x-deb": {},
    "application/x-debian-package": {
        "extensions": [
            "deb",
            "udeb"
        ]
    },
    "application/x-dgc-compressed": {
        "extensions": [
            "dgc"
        ]
    },
    "application/x-director": {
        "extensions": [
            "dir",
            "dcr",
            "dxr",
            "cst",
            "cct",
            "cxt",
            "w3d",
            "fgd",
            "swa"
        ]
    },
    "application/x-doom": {
        "extensions": [
            "wad"
        ]
    },
    "application/x-dtbncx+xml": {
        "extensions": [
            "ncx"
        ]
    },
    "application/x-dtbook+xml": {
        "extensions": [
            "dtb"
        ]
    },
    "application/x-dtbresource+xml": {
        "extensions": [
            "res"
        ]
    },
    "application/x-dvi": {
        "extensions": [
            "dvi"
        ]
    },
    "application/x-envoy": {
        "extensions": [
            "evy"
        ]
    },
    "application/x-eva": {
        "extensions": [
            "eva"
        ]
    },
    "application/x-font-bdf": {
        "extensions": [
            "bdf"
        ]
    },
    "application/x-font-dos": {},
    "application/x-font-framemaker": {},
    "application/x-font-ghostscript": {
        "extensions": [
            "gsf"
        ]
    },
    "application/x-font-libgrx": {},
    "application/x-font-linux-psf": {
        "extensions": [
            "psf"
        ]
    },
    "application/x-font-otf": {
        "extensions": [
            "otf"
        ]
    },
    "application/x-font-pcf": {
        "extensions": [
            "pcf"
        ]
    },
    "application/x-font-snf": {
        "extensions": [
            "snf"
        ]
    },
    "application/x-font-speedo": {},
    "application/x-font-sunos-news": {},
    "application/x-font-ttf": {
        "extensions": [
            "ttf",
            "ttc"
        ]
    },
    "application/x-font-type1": {
        "extensions": [
            "pfa",
            "pfb",
            "pfm",
            "afm"
        ]
    },
    "application/x-font-vfont": {},
    "application/x-freearc": {
        "extensions": [
            "arc"
        ]
    },
    "application/x-futuresplash": {
        "extensions": [
            "spl"
        ]
    },
    "application/x-gca-compressed": {
        "extensions": [
            "gca"
        ]
    },
    "application/x-glulx": {
        "extensions": [
            "ulx"
        ]
    },
    "application/x-gnumeric": {
        "extensions": [
            "gnumeric"
        ]
    },
    "application/x-gramps-xml": {
        "extensions": [
            "gramps"
        ]
    },
    "application/x-gtar": {
        "extensions": [
            "gtar"
        ]
    },
    "application/x-gzip": {},
    "application/x-hdf": {
        "extensions": [
            "hdf"
        ]
    },
    "application/x-httpd-php": {
        "extensions": [
            "php"
        ]
    },
    "application/x-install-instructions": {
        "extensions": [
            "install"
        ]
    },
    "application/x-iso9660-image": {
        "extensions": [
            "iso"
        ]
    },
    "application/x-java-archive-diff": {
        "extensions": [
            "jardiff"
        ]
    },
    "application/x-java-jnlp-file": {
        "extensions": [
            "jnlp"
        ]
    },
    "application/x-javascript": {},
    "application/x-latex": {
        "extensions": [
            "latex"
        ]
    },
    "application/x-lua-bytecode": {
        "extensions": [
            "luac"
        ]
    },
    "application/x-lzh-compressed": {
        "extensions": [
            "lzh",
            "lha"
        ]
    },
    "application/x-makeself": {
        "extensions": [
            "run"
        ]
    },
    "application/x-mie": {
        "extensions": [
            "mie"
        ]
    },
    "application/x-mobipocket-ebook": {
        "extensions": [
            "prc",
            "mobi"
        ]
    },
    "application/x-mpegurl": {},
    "application/x-ms-application": {
        "extensions": [
            "application"
        ]
    },
    "application/x-ms-shortcut": {
        "extensions": [
            "lnk"
        ]
    },
    "application/x-ms-wmd": {
        "extensions": [
            "wmd"
        ]
    },
    "application/x-ms-wmz": {
        "extensions": [
            "wmz"
        ]
    },
    "application/x-ms-xbap": {
        "extensions": [
            "xbap"
        ]
    },
    "application/x-msaccess": {
        "extensions": [
            "mdb"
        ]
    },
    "application/x-msbinder": {
        "extensions": [
            "obd"
        ]
    },
    "application/x-mscardfile": {
        "extensions": [
            "crd"
        ]
    },
    "application/x-msclip": {
        "extensions": [
            "clp"
        ]
    },
    "application/x-msdos-program": {
        "extensions": [
            "exe"
        ]
    },
    "application/x-msdownload": {
        "extensions": [
            "exe",
            "dll",
            "com",
            "bat",
            "msi"
        ]
    },
    "application/x-msmediaview": {
        "extensions": [
            "mvb",
            "m13",
            "m14"
        ]
    },
    "application/x-msmetafile": {
        "extensions": [
            "wmf",
            "wmz",
            "emf",
            "emz"
        ]
    },
    "application/x-msmoney": {
        "extensions": [
            "mny"
        ]
    },
    "application/x-mspublisher": {
        "extensions": [
            "pub"
        ]
    },
    "application/x-msschedule": {
        "extensions": [
            "scd"
        ]
    },
    "application/x-msterminal": {
        "extensions": [
            "trm"
        ]
    },
    "application/x-mswrite": {
        "extensions": [
            "wri"
        ]
    },
    "application/x-netcdf": {
        "extensions": [
            "nc",
            "cdf"
        ]
    },
    "application/x-ns-proxy-autoconfig": {
        "extensions": [
            "pac"
        ]
    },
    "application/x-nzb": {
        "extensions": [
            "nzb"
        ]
    },
    "application/x-perl": {
        "extensions": [
            "pl",
            "pm"
        ]
    },
    "application/x-pilot": {
        "extensions": [
            "prc",
            "pdb"
        ]
    },
    "application/x-pkcs12": {
        "extensions": [
            "p12",
            "pfx"
        ]
    },
    "application/x-pkcs7-certificates": {
        "extensions": [
            "p7b",
            "spc"
        ]
    },
    "application/x-pkcs7-certreqresp": {
        "extensions": [
            "p7r"
        ]
    },
    "application/x-rar-compressed": {
        "extensions": [
            "rar"
        ]
    },
    "application/x-redhat-package-manager": {
        "extensions": [
            "rpm"
        ]
    },
    "application/x-research-info-systems": {
        "extensions": [
            "ris"
        ]
    },
    "application/x-sea": {
        "extensions": [
            "sea"
        ]
    },
    "application/x-sh": {
        "extensions": [
            "sh"
        ]
    },
    "application/x-shar": {
        "extensions": [
            "shar"
        ]
    },
    "application/x-shockwave-flash": {
        "extensions": [
            "swf"
        ]
    },
    "application/x-silverlight-app": {
        "extensions": [
            "xap"
        ]
    },
    "application/x-sql": {
        "extensions": [
            "sql"
        ]
    },
    "application/x-stuffit": {
        "extensions": [
            "sit"
        ]
    },
    "application/x-stuffitx": {
        "extensions": [
            "sitx"
        ]
    },
    "application/x-subrip": {
        "extensions": [
            "srt"
        ]
    },
    "application/x-sv4cpio": {
        "extensions": [
            "sv4cpio"
        ]
    },
    "application/x-sv4crc": {
        "extensions": [
            "sv4crc"
        ]
    },
    "application/x-t3vm-image": {
        "extensions": [
            "t3"
        ]
    },
    "application/x-tads": {
        "extensions": [
            "gam"
        ]
    },
    "application/x-tar": {
        "extensions": [
            "tar"
        ]
    },
    "application/x-tcl": {
        "extensions": [
            "tcl",
            "tk"
        ]
    },
    "application/x-tex": {
        "extensions": [
            "tex"
        ]
    },
    "application/x-tex-tfm": {
        "extensions": [
            "tfm"
        ]
    },
    "application/x-texinfo": {
        "extensions": [
            "texinfo",
            "texi"
        ]
    },
    "application/x-tgif": {
        "extensions": [
            "obj"
        ]
    },
    "application/x-ustar": {
        "extensions": [
            "ustar"
        ]
    },
    "application/x-wais-source": {
        "extensions": [
            "src"
        ]
    },
    "application/x-web-app-manifest+json": {
        "extensions": [
            "webapp"
        ]
    },
    "application/x-www-form-urlencoded": {},
    "application/x-x509-ca-cert": {
        "extensions": [
            "der",
            "crt",
            "pem"
        ]
    },
    "application/x-xfig": {
        "extensions": [
            "fig"
        ]
    },
    "application/x-xliff+xml": {
        "extensions": [
            "xlf"
        ]
    },
    "application/x-xpinstall": {
        "extensions": [
            "xpi"
        ]
    },
    "application/x-xz": {
        "extensions": [
            "xz"
        ]
    },
    "application/x-zmachine": {
        "extensions": [
            "z1",
            "z2",
            "z3",
            "z4",
            "z5",
            "z6",
            "z7",
            "z8"
        ]
    },
    "application/x400-bp": {},
    "application/xacml+xml": {},
    "application/xaml+xml": {
        "extensions": [
            "xaml"
        ]
    },
    "application/xcap-att+xml": {},
    "application/xcap-caps+xml": {},
    "application/xcap-diff+xml": {
        "extensions": [
            "xdf"
        ]
    },
    "application/xcap-el+xml": {},
    "application/xcap-error+xml": {},
    "application/xcap-ns+xml": {},
    "application/xcon-conference-info+xml": {},
    "application/xcon-conference-info-diff+xml": {},
    "application/xenc+xml": {
        "extensions": [
            "xenc"
        ]
    },
    "application/xhtml+xml": {
        "extensions": [
            "xhtml",
            "xht"
        ]
    },
    "application/xhtml-voice+xml": {},
    "application/xml": {
        "extensions": [
            "xml",
            "xsl",
            "xsd",
            "rng"
        ]
    },
    "application/xml-dtd": {
        "extensions": [
            "dtd"
        ]
    },
    "application/xml-external-parsed-entity": {},
    "application/xml-patch+xml": {},
    "application/xmpp+xml": {},
    "application/xop+xml": {
        "extensions": [
            "xop"
        ]
    },
    "application/xproc+xml": {
        "extensions": [
            "xpl"
        ]
    },
    "application/xslt+xml": {
        "extensions": [
            "xslt"
        ]
    },
    "application/xspf+xml": {
        "extensions": [
            "xspf"
        ]
    },
    "application/xv+xml": {
        "extensions": [
            "mxml",
            "xhvml",
            "xvml",
            "xvm"
        ]
    },
    "application/yang": {
        "extensions": [
            "yang"
        ]
    },
    "application/yang-data+json": {},
    "application/yang-data+xml": {},
    "application/yang-patch+json": {},
    "application/yang-patch+xml": {},
    "application/yin+xml": {
        "extensions": [
            "yin"
        ]
    },
    "application/zip": {
        "extensions": [
            "zip"
        ]
    },
    "application/zlib": {},
    "audio/1d-interleaved-parityfec": {},
    "audio/32kadpcm": {},
    "audio/3gpp": {
        "extensions": [
            "3gpp"
        ]
    },
    "audio/3gpp2": {},
    "audio/ac3": {},
    "audio/adpcm": {
        "extensions": [
            "adp"
        ]
    },
    "audio/amr": {},
    "audio/amr-wb": {},
    "audio/amr-wb+": {},
    "audio/aptx": {},
    "audio/asc": {},
    "audio/atrac-advanced-lossless": {},
    "audio/atrac-x": {},
    "audio/atrac3": {},
    "audio/basic": {
        "extensions": [
            "au",
            "snd"
        ]
    },
    "audio/bv16": {},
    "audio/bv32": {},
    "audio/clearmode": {},
    "audio/cn": {},
    "audio/dat12": {},
    "audio/dls": {},
    "audio/dsr-es201108": {},
    "audio/dsr-es202050": {},
    "audio/dsr-es202211": {},
    "audio/dsr-es202212": {},
    "audio/dv": {},
    "audio/dvi4": {},
    "audio/eac3": {},
    "audio/encaprtp": {},
    "audio/evrc": {},
    "audio/evrc-qcp": {},
    "audio/evrc0": {},
    "audio/evrc1": {},
    "audio/evrcb": {},
    "audio/evrcb0": {},
    "audio/evrcb1": {},
    "audio/evrcnw": {},
    "audio/evrcnw0": {},
    "audio/evrcnw1": {},
    "audio/evrcwb": {},
    "audio/evrcwb0": {},
    "audio/evrcwb1": {},
    "audio/evs": {},
    "audio/fwdred": {},
    "audio/g711-0": {},
    "audio/g719": {},
    "audio/g722": {},
    "audio/g7221": {},
    "audio/g723": {},
    "audio/g726-16": {},
    "audio/g726-24": {},
    "audio/g726-32": {},
    "audio/g726-40": {},
    "audio/g728": {},
    "audio/g729": {},
    "audio/g7291": {},
    "audio/g729d": {},
    "audio/g729e": {},
    "audio/gsm": {},
    "audio/gsm-efr": {},
    "audio/gsm-hr-08": {},
    "audio/ilbc": {},
    "audio/ip-mr_v2.5": {},
    "audio/isac": {},
    "audio/l16": {},
    "audio/l20": {},
    "audio/l24": {},
    "audio/l8": {},
    "audio/lpc": {},
    "audio/midi": {
        "extensions": [
            "mid",
            "midi",
            "kar",
            "rmi"
        ]
    },
    "audio/mobile-xmf": {},
    "audio/mp3": {
        "extensions": [
            "mp3"
        ]
    },
    "audio/mp4": {
        "extensions": [
            "m4a",
            "mp4a"
        ]
    },
    "audio/mp4a-latm": {},
    "audio/mpa": {},
    "audio/mpa-robust": {},
    "audio/mpeg": {
        "extensions": [
            "mpga",
            "mp2",
            "mp2a",
            "mp3",
            "m2a",
            "m3a"
        ]
    },
    "audio/mpeg4-generic": {},
    "audio/musepack": {},
    "audio/ogg": {
        "extensions": [
            "oga",
            "ogg",
            "spx"
        ]
    },
    "audio/opus": {},
    "audio/parityfec": {},
    "audio/pcma": {},
    "audio/pcma-wb": {},
    "audio/pcmu": {},
    "audio/pcmu-wb": {},
    "audio/prs.sid": {},
    "audio/qcelp": {},
    "audio/raptorfec": {},
    "audio/red": {},
    "audio/rtp-enc-aescm128": {},
    "audio/rtp-midi": {},
    "audio/rtploopback": {},
    "audio/rtx": {},
    "audio/s3m": {
        "extensions": [
            "s3m"
        ]
    },
    "audio/silk": {
        "extensions": [
            "sil"
        ]
    },
    "audio/smv": {},
    "audio/smv-qcp": {},
    "audio/smv0": {},
    "audio/sp-midi": {},
    "audio/speex": {},
    "audio/t140c": {},
    "audio/t38": {},
    "audio/telephone-event": {},
    "audio/tone": {},
    "audio/uemclip": {},
    "audio/ulpfec": {},
    "audio/vdvi": {},
    "audio/vmr-wb": {},
    "audio/vnd.3gpp.iufp": {},
    "audio/vnd.4sb": {},
    "audio/vnd.audiokoz": {},
    "audio/vnd.celp": {},
    "audio/vnd.cisco.nse": {},
    "audio/vnd.cmles.radio-events": {},
    "audio/vnd.cns.anp1": {},
    "audio/vnd.cns.inf1": {},
    "audio/vnd.dece.audio": {
        "extensions": [
            "uva",
            "uvva"
        ]
    },
    "audio/vnd.digital-winds": {
        "extensions": [
            "eol"
        ]
    },
    "audio/vnd.dlna.adts": {},
    "audio/vnd.dolby.heaac.1": {},
    "audio/vnd.dolby.heaac.2": {},
    "audio/vnd.dolby.mlp": {},
    "audio/vnd.dolby.mps": {},
    "audio/vnd.dolby.pl2": {},
    "audio/vnd.dolby.pl2x": {},
    "audio/vnd.dolby.pl2z": {},
    "audio/vnd.dolby.pulse.1": {},
    "audio/vnd.dra": {
        "extensions": [
            "dra"
        ]
    },
    "audio/vnd.dts": {
        "extensions": [
            "dts"
        ]
    },
    "audio/vnd.dts.hd": {
        "extensions": [
            "dtshd"
        ]
    },
    "audio/vnd.dvb.file": {},
    "audio/vnd.everad.plj": {},
    "audio/vnd.hns.audio": {},
    "audio/vnd.lucent.voice": {
        "extensions": [
            "lvp"
        ]
    },
    "audio/vnd.ms-playready.media.pya": {
        "extensions": [
            "pya"
        ]
    },
    "audio/vnd.nokia.mobile-xmf": {},
    "audio/vnd.nortel.vbk": {},
    "audio/vnd.nuera.ecelp4800": {
        "extensions": [
            "ecelp4800"
        ]
    },
    "audio/vnd.nuera.ecelp7470": {
        "extensions": [
            "ecelp7470"
        ]
    },
    "audio/vnd.nuera.ecelp9600": {
        "extensions": [
            "ecelp9600"
        ]
    },
    "audio/vnd.octel.sbc": {},
    "audio/vnd.qcelp": {},
    "audio/vnd.rhetorex.32kadpcm": {},
    "audio/vnd.rip": {
        "extensions": [
            "rip"
        ]
    },
    "audio/vnd.rn-realaudio": {},
    "audio/vnd.sealedmedia.softseal.mpeg": {},
    "audio/vnd.vmx.cvsd": {},
    "audio/vnd.wave": {},
    "audio/vorbis": {},
    "audio/vorbis-config": {},
    "audio/wav": {
        "extensions": [
            "wav"
        ]
    },
    "audio/wave": {
        "extensions": [
            "wav"
        ]
    },
    "audio/webm": {
        "extensions": [
            "weba"
        ]
    },
    "audio/x-aac": {
        "extensions": [
            "aac"
        ]
    },
    "audio/x-aiff": {
        "extensions": [
            "aif",
            "aiff",
            "aifc"
        ]
    },
    "audio/x-caf": {
        "extensions": [
            "caf"
        ]
    },
    "audio/x-flac": {
        "extensions": [
            "flac"
        ]
    },
    "audio/x-m4a": {
        "extensions": [
            "m4a"
        ]
    },
    "audio/x-matroska": {
        "extensions": [
            "mka"
        ]
    },
    "audio/x-mpegurl": {
        "extensions": [
            "m3u"
        ]
    },
    "audio/x-ms-wax": {
        "extensions": [
            "wax"
        ]
    },
    "audio/x-ms-wma": {
        "extensions": [
            "wma"
        ]
    },
    "audio/x-pn-realaudio": {
        "extensions": [
            "ram",
            "ra"
        ]
    },
    "audio/x-pn-realaudio-plugin": {
        "extensions": [
            "rmp"
        ]
    },
    "audio/x-realaudio": {
        "extensions": [
            "ra"
        ]
    },
    "audio/x-tta": {},
    "audio/x-wav": {
        "extensions": [
            "wav"
        ]
    },
    "audio/xm": {
        "extensions": [
            "xm"
        ]
    },
    "chemical/x-cdx": {
        "extensions": [
            "cdx"
        ]
    },
    "chemical/x-cif": {
        "extensions": [
            "cif"
        ]
    },
    "chemical/x-cmdf": {
        "extensions": [
            "cmdf"
        ]
    },
    "chemical/x-cml": {
        "extensions": [
            "cml"
        ]
    },
    "chemical/x-csml": {
        "extensions": [
            "csml"
        ]
    },
    "chemical/x-pdb": {},
    "chemical/x-xyz": {
        "extensions": [
            "xyz"
        ]
    },
    "font/opentype": {
        "extensions": [
            "otf"
        ]
    },
    "image/bmp": {
        "extensions": [
            "bmp"
        ]
    },
    "image/cgm": {
        "extensions": [
            "cgm"
        ]
    },
    "image/dicom-rle": {},
    "image/emf": {},
    "image/fits": {},
    "image/g3fax": {
        "extensions": [
            "g3"
        ]
    },
    "image/gif": {
        "extensions": [
            "gif"
        ]
    },
    "image/ief": {
        "extensions": [
            "ief"
        ]
    },
    "image/jls": {},
    "image/jp2": {},
    "image/jpeg": {
        "extensions": [
            "jpeg",
            "jpg",
            "jpe"
        ]
    },
    "image/jpm": {},
    "image/jpx": {},
    "image/ktx": {
        "extensions": [
            "ktx"
        ]
    },
    "image/naplps": {},
    "image/pjpeg": {},
    "image/png": {
        "extensions": [
            "png"
        ]
    },
    "image/prs.btif": {
        "extensions": [
            "btif"
        ]
    },
    "image/prs.pti": {},
    "image/pwg-raster": {},
    "image/sgi": {
        "extensions": [
            "sgi"
        ]
    },
    "image/svg+xml": {
        "extensions": [
            "svg",
            "svgz"
        ]
    },
    "image/t38": {},
    "image/tiff": {
        "extensions": [
            "tiff",
            "tif"
        ]
    },
    "image/tiff-fx": {},
    "image/vnd.adobe.photoshop": {
        "extensions": [
            "psd"
        ]
    },
    "image/vnd.airzip.accelerator.azv": {},
    "image/vnd.cns.inf2": {},
    "image/vnd.dece.graphic": {
        "extensions": [
            "uvi",
            "uvvi",
            "uvg",
            "uvvg"
        ]
    },
    "image/vnd.djvu": {
        "extensions": [
            "djvu",
            "djv"
        ]
    },
    "image/vnd.dvb.subtitle": {
        "extensions": [
            "sub"
        ]
    },
    "image/vnd.dwg": {
        "extensions": [
            "dwg"
        ]
    },
    "image/vnd.dxf": {
        "extensions": [
            "dxf"
        ]
    },
    "image/vnd.fastbidsheet": {
        "extensions": [
            "fbs"
        ]
    },
    "image/vnd.fpx": {
        "extensions": [
            "fpx"
        ]
    },
    "image/vnd.fst": {
        "extensions": [
            "fst"
        ]
    },
    "image/vnd.fujixerox.edmics-mmr": {
        "extensions": [
            "mmr"
        ]
    },
    "image/vnd.fujixerox.edmics-rlc": {
        "extensions": [
            "rlc"
        ]
    },
    "image/vnd.globalgraphics.pgb": {},
    "image/vnd.microsoft.icon": {},
    "image/vnd.mix": {},
    "image/vnd.mozilla.apng": {},
    "image/vnd.ms-modi": {
        "extensions": [
            "mdi"
        ]
    },
    "image/vnd.ms-photo": {
        "extensions": [
            "wdp"
        ]
    },
    "image/vnd.net-fpx": {
        "extensions": [
            "npx"
        ]
    },
    "image/vnd.radiance": {},
    "image/vnd.sealed.png": {},
    "image/vnd.sealedmedia.softseal.gif": {},
    "image/vnd.sealedmedia.softseal.jpg": {},
    "image/vnd.svf": {},
    "image/vnd.tencent.tap": {},
    "image/vnd.valve.source.texture": {},
    "image/vnd.wap.wbmp": {
        "extensions": [
            "wbmp"
        ]
    },
    "image/vnd.xiff": {
        "extensions": [
            "xif"
        ]
    },
    "image/vnd.zbrush.pcx": {},
    "image/webp": {
        "extensions": [
            "webp"
        ]
    },
    "image/wmf": {},
    "image/x-3ds": {
        "extensions": [
            "3ds"
        ]
    },
    "image/x-cmu-raster": {
        "extensions": [
            "ras"
        ]
    },
    "image/x-cmx": {
        "extensions": [
            "cmx"
        ]
    },
    "image/x-freehand": {
        "extensions": [
            "fh",
            "fhc",
            "fh4",
            "fh5",
            "fh7"
        ]
    },
    "image/x-icon": {
        "extensions": [
            "ico"
        ]
    },
    "image/x-jng": {
        "extensions": [
            "jng"
        ]
    },
    "image/x-mrsid-image": {
        "extensions": [
            "sid"
        ]
    },
    "image/x-ms-bmp": {
        "extensions": [
            "bmp"
        ]
    },
    "image/x-pcx": {
        "extensions": [
            "pcx"
        ]
    },
    "image/x-pict": {
        "extensions": [
            "pic",
            "pct"
        ]
    },
    "image/x-portable-anymap": {
        "extensions": [
            "pnm"
        ]
    },
    "image/x-portable-bitmap": {
        "extensions": [
            "pbm"
        ]
    },
    "image/x-portable-graymap": {
        "extensions": [
            "pgm"
        ]
    },
    "image/x-portable-pixmap": {
        "extensions": [
            "ppm"
        ]
    },
    "image/x-rgb": {
        "extensions": [
            "rgb"
        ]
    },
    "image/x-tga": {
        "extensions": [
            "tga"
        ]
    },
    "image/x-xbitmap": {
        "extensions": [
            "xbm"
        ]
    },
    "image/x-xcf": {},
    "image/x-xpixmap": {
        "extensions": [
            "xpm"
        ]
    },
    "image/x-xwindowdump": {
        "extensions": [
            "xwd"
        ]
    },
    "message/cpim": {},
    "message/delivery-status": {},
    "message/disposition-notification": {},
    "message/external-body": {},
    "message/feedback-report": {},
    "message/global": {},
    "message/global-delivery-status": {},
    "message/global-disposition-notification": {},
    "message/global-headers": {},
    "message/http": {},
    "message/imdn+xml": {},
    "message/news": {},
    "message/partial": {},
    "message/rfc822": {
        "extensions": [
            "eml",
            "mime"
        ]
    },
    "message/s-http": {},
    "message/sip": {},
    "message/sipfrag": {},
    "message/tracking-status": {},
    "message/vnd.si.simp": {},
    "message/vnd.wfa.wsc": {},
    "model/gltf+json": {},
    "model/iges": {
        "extensions": [
            "igs",
            "iges"
        ]
    },
    "model/mesh": {
        "extensions": [
            "msh",
            "mesh",
            "silo"
        ]
    },
    "model/vnd.collada+xml": {
        "extensions": [
            "dae"
        ]
    },
    "model/vnd.dwf": {
        "extensions": [
            "dwf"
        ]
    },
    "model/vnd.flatland.3dml": {},
    "model/vnd.gdl": {
        "extensions": [
            "gdl"
        ]
    },
    "model/vnd.gs-gdl": {},
    "model/vnd.gs.gdl": {},
    "model/vnd.gtw": {
        "extensions": [
            "gtw"
        ]
    },
    "model/vnd.moml+xml": {},
    "model/vnd.mts": {
        "extensions": [
            "mts"
        ]
    },
    "model/vnd.opengex": {},
    "model/vnd.parasolid.transmit.binary": {},
    "model/vnd.parasolid.transmit.text": {},
    "model/vnd.rosette.annotated-data-model": {},
    "model/vnd.valve.source.compiled-map": {},
    "model/vnd.vtu": {
        "extensions": [
            "vtu"
        ]
    },
    "model/vrml": {
        "extensions": [
            "wrl",
            "vrml"
        ]
    },
    "model/x3d+binary": {
        "extensions": [
            "x3db",
            "x3dbz"
        ]
    },
    "model/x3d+fastinfoset": {},
    "model/x3d+vrml": {
        "extensions": [
            "x3dv",
            "x3dvz"
        ]
    },
    "model/x3d+xml": {
        "extensions": [
            "x3d",
            "x3dz"
        ]
    },
    "model/x3d-vrml": {},
    "multipart/alternative": {},
    "multipart/appledouble": {},
    "multipart/byteranges": {},
    "multipart/digest": {},
    "multipart/encrypted": {},
    "multipart/form-data": {},
    "multipart/header-set": {},
    "multipart/mixed": {},
    "multipart/parallel": {},
    "multipart/related": {},
    "multipart/report": {},
    "multipart/signed": {},
    "multipart/voice-message": {},
    "multipart/x-mixed-replace": {},
    "text/1d-interleaved-parityfec": {},
    "text/cache-manifest": {
        "extensions": [
            "appcache",
            "manifest"
        ]
    },
    "text/calendar": {
        "extensions": [
            "ics",
            "ifb"
        ]
    },
    "text/calender": {},
    "text/cmd": {},
    "text/coffeescript": {
        "extensions": [
            "coffee",
            "litcoffee"
        ]
    },
    "text/css": {
        "extensions": [
            "css"
        ]
    },
    "text/csv": {
        "extensions": [
            "csv"
        ]
    },
    "text/csv-schema": {},
    "text/directory": {},
    "text/dns": {},
    "text/ecmascript": {},
    "text/encaprtp": {},
    "text/enriched": {},
    "text/fwdred": {},
    "text/grammar-ref-list": {},
    "text/hjson": {
        "extensions": [
            "hjson"
        ]
    },
    "text/html": {
        "extensions": [
            "html",
            "htm",
            "shtml"
        ]
    },
    "text/jade": {
        "extensions": [
            "jade"
        ]
    },
    "text/javascript": {},
    "text/jcr-cnd": {},
    "text/jsx": {
        "extensions": [
            "jsx"
        ]
    },
    "text/less": {
        "extensions": [
            "less"
        ]
    },
    "text/markdown": {},
    "text/mathml": {
        "extensions": [
            "mml"
        ]
    },
    "text/mizar": {},
    "text/n3": {
        "extensions": [
            "n3"
        ]
    },
    "text/parameters": {},
    "text/parityfec": {},
    "text/plain": {
        "extensions": [
            "txt",
            "text",
            "conf",
            "def",
            "list",
            "log",
            "in",
            "ini"
        ]
    },
    "text/provenance-notation": {},
    "text/prs.fallenstein.rst": {},
    "text/prs.lines.tag": {
        "extensions": [
            "dsc"
        ]
    },
    "text/prs.prop.logic": {},
    "text/raptorfec": {},
    "text/red": {},
    "text/rfc822-headers": {},
    "text/richtext": {
        "extensions": [
            "rtx"
        ]
    },
    "text/rtf": {
        "extensions": [
            "rtf"
        ]
    },
    "text/rtp-enc-aescm128": {},
    "text/rtploopback": {},
    "text/rtx": {},
    "text/sgml": {
        "extensions": [
            "sgml",
            "sgm"
        ]
    },
    "text/slim": {
        "extensions": [
            "slim",
            "slm"
        ]
    },
    "text/stylus": {
        "extensions": [
            "stylus",
            "styl"
        ]
    },
    "text/t140": {},
    "text/tab-separated-values": {
        "extensions": [
            "tsv"
        ]
    },
    "text/troff": {
        "extensions": [
            "t",
            "tr",
            "roff",
            "man",
            "me",
            "ms"
        ]
    },
    "text/turtle": {
        "extensions": [
            "ttl"
        ]
    },
    "text/ulpfec": {},
    "text/uri-list": {
        "extensions": [
            "uri",
            "uris",
            "urls"
        ]
    },
    "text/vcard": {
        "extensions": [
            "vcard"
        ]
    },
    "text/vnd.a": {},
    "text/vnd.abc": {},
    "text/vnd.ascii-art": {},
    "text/vnd.curl": {
        "extensions": [
            "curl"
        ]
    },
    "text/vnd.curl.dcurl": {
        "extensions": [
            "dcurl"
        ]
    },
    "text/vnd.curl.mcurl": {
        "extensions": [
            "mcurl"
        ]
    },
    "text/vnd.curl.scurl": {
        "extensions": [
            "scurl"
        ]
    },
    "text/vnd.debian.copyright": {},
    "text/vnd.dmclientscript": {},
    "text/vnd.dvb.subtitle": {
        "extensions": [
            "sub"
        ]
    },
    "text/vnd.esmertec.theme-descriptor": {},
    "text/vnd.fly": {
        "extensions": [
            "fly"
        ]
    },
    "text/vnd.fmi.flexstor": {
        "extensions": [
            "flx"
        ]
    },
    "text/vnd.graphviz": {
        "extensions": [
            "gv"
        ]
    },
    "text/vnd.in3d.3dml": {
        "extensions": [
            "3dml"
        ]
    },
    "text/vnd.in3d.spot": {
        "extensions": [
            "spot"
        ]
    },
    "text/vnd.iptc.newsml": {},
    "text/vnd.iptc.nitf": {},
    "text/vnd.latex-z": {},
    "text/vnd.motorola.reflex": {},
    "text/vnd.ms-mediapackage": {},
    "text/vnd.net2phone.commcenter.command": {},
    "text/vnd.radisys.msml-basic-layout": {},
    "text/vnd.si.uricatalogue": {},
    "text/vnd.sun.j2me.app-descriptor": {
        "extensions": [
            "jad"
        ]
    },
    "text/vnd.trolltech.linguist": {},
    "text/vnd.wap.si": {},
    "text/vnd.wap.sl": {},
    "text/vnd.wap.wml": {
        "extensions": [
            "wml"
        ]
    },
    "text/vnd.wap.wmlscript": {
        "extensions": [
            "wmls"
        ]
    },
    "text/vtt": {
        "charset": "UTF-8",
            "extensions": [
            "vtt"
        ]
    },
    "text/x-asm": {
        "extensions": [
            "s",
            "asm"
        ]
    },
    "text/x-c": {
        "extensions": [
            "c",
            "cc",
            "cxx",
            "cpp",
            "h",
            "hh",
            "dic"
        ]
    },
    "text/x-component": {
        "extensions": [
            "htc"
        ]
    },
    "text/x-fortran": {
        "extensions": [
            "f",
            "for",
            "f77",
            "f90"
        ]
    },
    "text/x-gwt-rpc": {},
    "text/x-handlebars-template": {
        "extensions": [
            "hbs"
        ]
    },
    "text/x-java-source": {
        "extensions": [
            "java"
        ]
    },
    "text/x-jquery-tmpl": {},
    "text/x-lua": {
        "extensions": [
            "lua"
        ]
    },
    "text/x-markdown": {
        "extensions": [
            "markdown",
            "md",
            "mkd"
        ]
    },
    "text/x-nfo": {
        "extensions": [
            "nfo"
        ]
    },
    "text/x-opml": {
        "extensions": [
            "opml"
        ]
    },
    "text/x-pascal": {
        "extensions": [
            "p",
            "pas"
        ]
    },
    "text/x-processing": {
        "extensions": [
            "pde"
        ]
    },
    "text/x-sass": {
        "extensions": [
            "sass"
        ]
    },
    "text/x-scss": {
        "extensions": [
            "scss"
        ]
    },
    "text/x-setext": {
        "extensions": [
            "etx"
        ]
    },
    "text/x-sfv": {
        "extensions": [
            "sfv"
        ]
    },
    "text/x-suse-ymp": {
        "extensions": [
            "ymp"
        ]
    },
    "text/x-uuencode": {
        "extensions": [
            "uu"
        ]
    },
    "text/x-vcalendar": {
        "extensions": [
            "vcs"
        ]
    },
    "text/x-vcard": {
        "extensions": [
            "vcf"
        ]
    },
    "text/xml": {
        "extensions": [
            "xml"
        ]
    },
    "text/xml-external-parsed-entity": {},
    "text/yaml": {
        "extensions": [
            "yaml",
            "yml"
        ]
    },
    "video/1d-interleaved-parityfec": {},
    "video/3gpp": {
        "extensions": [
            "3gp",
            "3gpp"
        ]
    },
    "video/3gpp-tt": {},
    "video/3gpp2": {
        "extensions": [
            "3g2"
        ]
    },
    "video/bmpeg": {},
    "video/bt656": {},
    "video/celb": {},
    "video/dv": {},
    "video/encaprtp": {},
    "video/h261": {
        "extensions": [
            "h261"
        ]
    },
    "video/h263": {
        "extensions": [
            "h263"
        ]
    },
    "video/h263-1998": {},
    "video/h263-2000": {},
    "video/h264": {
        "extensions": [
            "h264"
        ]
    },
    "video/h264-rcdo": {},
    "video/h264-svc": {},
    "video/h265": {},
    "video/iso.segment": {},
    "video/jpeg": {
        "extensions": [
            "jpgv"
        ]
    },
    "video/jpeg2000": {},
    "video/jpm": {
        "extensions": [
            "jpm",
            "jpgm"
        ]
    },
    "video/mj2": {
        "extensions": [
            "mj2",
            "mjp2"
        ]
    },
    "video/mp1s": {},
    "video/mp2p": {},
    "video/mp2t": {
        "extensions": [
            "ts"
        ]
    },
    "video/mp4": {
        "extensions": [
            "mp4",
            "mp4v",
            "mpg4"
        ]
    },
    "video/mp4v-es": {},
    "video/mpeg": {
        "extensions": [
            "mpeg",
            "mpg",
            "mpe",
            "m1v",
            "m2v"
        ]
    },
    "video/mpeg4-generic": {},
    "video/mpv": {},
    "video/nv": {},
    "video/ogg": {
        "extensions": [
            "ogv"
        ]
    },
    "video/parityfec": {},
    "video/pointer": {},
    "video/quicktime": {
        "extensions": [
            "qt",
            "mov"
        ]
    },
    "video/raptorfec": {},
    "video/raw": {},
    "video/rtp-enc-aescm128": {},
    "video/rtploopback": {},
    "video/rtx": {},
    "video/smpte292m": {},
    "video/ulpfec": {},
    "video/vc1": {},
    "video/vnd.cctv": {},
    "video/vnd.dece.hd": {
        "extensions": [
            "uvh",
            "uvvh"
        ]
    },
    "video/vnd.dece.mobile": {
        "extensions": [
            "uvm",
            "uvvm"
        ]
    },
    "video/vnd.dece.mp4": {},
    "video/vnd.dece.pd": {
        "extensions": [
            "uvp",
            "uvvp"
        ]
    },
    "video/vnd.dece.sd": {
        "extensions": [
            "uvs",
            "uvvs"
        ]
    },
    "video/vnd.dece.video": {
        "extensions": [
            "uvv",
            "uvvv"
        ]
    },
    "video/vnd.directv.mpeg": {},
    "video/vnd.directv.mpeg-tts": {},
    "video/vnd.dlna.mpeg-tts": {},
    "video/vnd.dvb.file": {
        "extensions": [
            "dvb"
        ]
    },
    "video/vnd.fvt": {
        "extensions": [
            "fvt"
        ]
    },
    "video/vnd.hns.video": {},
    "video/vnd.iptvforum.1dparityfec-1010": {},
    "video/vnd.iptvforum.1dparityfec-2005": {},
    "video/vnd.iptvforum.2dparityfec-1010": {},
    "video/vnd.iptvforum.2dparityfec-2005": {},
    "video/vnd.iptvforum.ttsavc": {},
    "video/vnd.iptvforum.ttsmpeg2": {},
    "video/vnd.motorola.video": {},
    "video/vnd.motorola.videop": {},
    "video/vnd.mpegurl": {
        "extensions": [
            "mxu",
            "m4u"
        ]
    },
    "video/vnd.ms-playready.media.pyv": {
        "extensions": [
            "pyv"
        ]
    },
    "video/vnd.nokia.interleaved-multimedia": {},
    "video/vnd.nokia.videovoip": {},
    "video/vnd.objectvideo": {},
    "video/vnd.radgamettools.bink": {},
    "video/vnd.radgamettools.smacker": {},
    "video/vnd.sealed.mpeg1": {},
    "video/vnd.sealed.mpeg4": {},
    "video/vnd.sealed.swf": {},
    "video/vnd.sealedmedia.softseal.mov": {},
    "video/vnd.uvvu.mp4": {
        "extensions": [
            "uvu",
            "uvvu"
        ]
    },
    "video/vnd.vivo": {
        "extensions": [
            "viv"
        ]
    },
    "video/vp8": {},
    "video/webm": {
        "extensions": [
            "webm"
        ]
    },
    "video/x-f4v": {
        "extensions": [
            "f4v"
        ]
    },
    "video/x-fli": {
        "extensions": [
            "fli"
        ]
    },
    "video/x-flv": {
        "extensions": [
            "flv"
        ]
    },
    "video/x-m4v": {
        "extensions": [
            "m4v"
        ]
    },
    "video/x-matroska": {
        "extensions": [
            "mkv",
            "mk3d",
            "mks"
        ]
    },
    "video/x-mng": {
        "extensions": [
            "mng"
        ]
    },
    "video/x-ms-asf": {
        "extensions": [
            "asf",
            "asx"
        ]
    },
    "video/x-ms-vob": {
        "extensions": [
            "vob"
        ]
    },
    "video/x-ms-wm": {
        "extensions": [
            "wm"
        ]
    },
    "video/x-ms-wmv": {
        "extensions": [
            "wmv"
        ]
    },
    "video/x-ms-wmx": {
        "extensions": [
            "wmx"
        ]
    },
    "video/x-ms-wvx": {
        "extensions": [
            "wvx"
        ]
    },
    "video/x-msvideo": {
        "extensions": [
            "avi"
        ]
    },
    "video/x-sgi-movie": {
        "extensions": [
            "movie"
        ]
    },
    "video/x-smv": {
        "extensions": [
            "smv"
        ]
    },
    "x-conference/x-cooltalk": {
        "extensions": [
            "ice"
        ]
    },
    "x-shader/x-fragment": {},
    "x-shader/x-vertex": {}
}

const STATUS_CODES = {
    'Continue': '100',
    'Switching Protocols': '101',
    'OK': '200',
    'Created': '201',
    'Accepted': '202',
    'Non-Authoritative Information': '203',
    'No Content': '204',
    'Reset Content': '205',
    'Partial Content': '206',
    'Multiple Choices': '300',
    'Moved Permanently': '301',
    'Found': '302',
    'See Other': '303',
    'Not Modified': '304',
    'Use Proxy': '305',
    'Temporary Redirect': '307',
    'Bad Request': '400',
    'Unauthorized': '401',
    'Payment Required': '402',
    'Forbidden': '403',
    'Not Found': '404',
    'Method Not Allowed': '405',
    'Not Acceptable': '406',
    'Proxy Authentication Required': '407',
    'Request Time-out': '408',
    'Conflict': '409',
    'Gone': '410',
    'Length Required': '411',
    'Precondition Failed': '412',
    'Request Entity Too Large': '413',
    'Request-URI Too Large': '414',
    'Unsupported Media Type': '415',
    'Requested range not satisfiable': '416',
    'Expectation Failed': '417',
    'Internal Server Error': '500',
    'Not Implemented': '501',
    'Bad Gateway': '502',
    'Service Unavailable': '503',
    'Gateway Time-out': '504',
    'HTTP Version not supported': '505',

    100: 'Continue',
    101: 'Switching Protocols',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status',               // RFC 4918
    208: 'Already Reported',
    226: 'IM Used',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',         // RFC 7238
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    418: 'I\'m a teapot',              // RFC 2324
    421: 'Misdirected Request',
    422: 'Unprocessable Entity',       // RFC 4918
    423: 'Locked',                     // RFC 4918
    424: 'Failed Dependency',          // RFC 4918
    425: 'Unordered Collection',       // RFC 4918
    426: 'Upgrade Required',           // RFC 2817
    428: 'Precondition Required',      // RFC 6585
    429: 'Too Many Requests',          // RFC 6585
    431: 'Request Header Fields Too Large', // RFC 6585
    451: 'Unavailable For Legal Reasons',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',    // RFC 2295
    507: 'Insufficient Storage',       // RFC 4918
    508: 'Loop Detected',
    509: 'Bandwidth Limit Exceeded',
    510: 'Not Extended',               // RFC 2774
    511: 'Network Authentication Required' // RFC 6585
};



module.exports = {
    MIME_TYPES: MimeTypes,
    STATUS_CODES: STATUS_CODES

};