--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Ppl; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Ppl" (
    email text NOT NULL,
    id text NOT NULL,
    password text NOT NULL,
    role text NOT NULL,
    status boolean DEFAULT true NOT NULL,
    username text NOT NULL
);


--
-- Name: Product; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Product" (
    id text NOT NULL,
    name text NOT NULL
);


--
-- Name: _Migration; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."_Migration" (
    revision integer NOT NULL,
    name text NOT NULL,
    datamodel text NOT NULL,
    status text NOT NULL,
    applied integer NOT NULL,
    rolled_back integer NOT NULL,
    datamodel_steps text NOT NULL,
    database_migration text NOT NULL,
    errors text NOT NULL,
    started_at timestamp(3) without time zone NOT NULL,
    finished_at timestamp(3) without time zone
);


--
-- Name: _Migration_revision_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."_Migration_revision_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _Migration_revision_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."_Migration_revision_seq" OWNED BY public."_Migration".revision;


--
-- Name: _Migration revision; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."_Migration" ALTER COLUMN revision SET DEFAULT nextval('public."_Migration_revision_seq"'::regclass);


--
-- Data for Name: Ppl; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Ppl" (email, id, password, role, status, username) FROM stdin;
email1@gmail.com	ckd0qeux500002i9kwjnypwg7	12345	admin	t	user1
email2@gmail.com	ckd0qfayk00002t9kksr91t08	123452	guest	f	user2
email3@gmail.com	ckd0qfkob00052t9khjgv8upq	1234523	guest2	f	user3
email4@gmail.com	ckd0qg84200102t9kzzkfzvav	12345234	guest4	t	user4
email5@gmail.com	ckd0qgl1800152t9knealkc85	123452345	admin2	t	user5
email6@gmail.com	ckd0qhpyp00202t9kzsry55xb	1234523456	admin3	f	user6
email67@gmail.com	ckd0qhy9x00252t9ky47czua4	12345234567	admin37	f	user67
email678@gmail.com	ckd0qi4or00302t9kswflrmkm	123452345678	admin378	f	user678
email6789@gmail.com	ckd0qib2t00352t9k8i2kv9x3	1234523456789	admin3789	f	user6789
email6789a@gmail.com	ckd0qijos00402t9ks2mnubu4	1234523456789a	admin3789a	t	user6789a
email6789a1@gmail.com	ckd0qiqrr00452t9kjz6katq5	1234523456789a1	admin3789a1	t	user6789a1
\.


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Product" (id, name) FROM stdin;
ckd0q70h90000z09k58f5f7bq	Nike1
ckd0q77c00000z79ki77c6wi7	Nike3
ckd0q7a3j0005z79kg8f3vlaq	Nike4
ckd0q7cqk0010z79k8nx70eh5	Nike5
ckd0q7fbe0015z79kpp0rat7h	Nike6
ckd0q7ial0020z79kujaavwjf	Nike7
ckd0q7l3o0025z79kjoxdolpw	Nike8
ckd0q7nyr0030z79knp3rekqa	Nike9
ckd0q7r040035z79khk449eae	Nike10
ckd0q7tnz0040z79kqed2zihh	Nike11
\.


--
-- Data for Name: _Migration; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."_Migration" (revision, name, datamodel, status, applied, rolled_back, datamodel_steps, database_migration, errors, started_at, finished_at) FROM stdin;
1	20200725001459-init	datasource db {\n  provider = "postgresql"\n  url      = "***"\n}\n\nmodel Ppl {\n  id       String  @default(cuid()) @id\n  username String\n  email    String  @unique\n  password String\n  role     String\n  status   Boolean @default(true)\n}\n\nmodel Product {\n  id   String @default(cuid()) @id\n  name String\n}\n	MigrationSuccess	2	0	[{"tag":"CreateSource","source":"db"},{"tag":"CreateArgument","location":{"tag":"Source","source":"db"},"argument":"provider","value":"\\"postgresql\\""},{"tag":"CreateArgument","location":{"tag":"Source","source":"db"},"argument":"url","value":"\\"***\\""},{"tag":"CreateModel","model":"Ppl"},{"tag":"CreateField","model":"Ppl","field":"id","type":"String","arity":"Required"},{"tag":"CreateDirective","location":{"path":{"tag":"Field","model":"Ppl","field":"id"},"directive":"default"}},{"tag":"CreateArgument","location":{"tag":"Directive","path":{"tag":"Field","model":"Ppl","field":"id"},"directive":"default"},"argument":"","value":"cuid()"},{"tag":"CreateDirective","location":{"path":{"tag":"Field","model":"Ppl","field":"id"},"directive":"id"}},{"tag":"CreateField","model":"Ppl","field":"username","type":"String","arity":"Required"},{"tag":"CreateField","model":"Ppl","field":"email","type":"String","arity":"Required"},{"tag":"CreateDirective","location":{"path":{"tag":"Field","model":"Ppl","field":"email"},"directive":"unique"}},{"tag":"CreateField","model":"Ppl","field":"password","type":"String","arity":"Required"},{"tag":"CreateField","model":"Ppl","field":"role","type":"String","arity":"Required"},{"tag":"CreateField","model":"Ppl","field":"status","type":"Boolean","arity":"Required"},{"tag":"CreateDirective","location":{"path":{"tag":"Field","model":"Ppl","field":"status"},"directive":"default"}},{"tag":"CreateArgument","location":{"tag":"Directive","path":{"tag":"Field","model":"Ppl","field":"status"},"directive":"default"},"argument":"","value":"true"},{"tag":"CreateModel","model":"Product"},{"tag":"CreateField","model":"Product","field":"id","type":"String","arity":"Required"},{"tag":"CreateDirective","location":{"path":{"tag":"Field","model":"Product","field":"id"},"directive":"default"}},{"tag":"CreateArgument","location":{"tag":"Directive","path":{"tag":"Field","model":"Product","field":"id"},"directive":"default"},"argument":"","value":"cuid()"},{"tag":"CreateDirective","location":{"path":{"tag":"Field","model":"Product","field":"id"},"directive":"id"}},{"tag":"CreateField","model":"Product","field":"name","type":"String","arity":"Required"}]	{"before":{"tables":[{"name":"_Migration","columns":[{"name":"applied","tpe":{"dataType":"integer","fullDataType":"int4","characterMaximumLength":null,"family":"int","arity":"required"},"default":null,"autoIncrement":false},{"name":"database_migration","tpe":{"dataType":"text","fullDataType":"text","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"datamodel","tpe":{"dataType":"text","fullDataType":"text","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"datamodel_steps","tpe":{"dataType":"text","fullDataType":"text","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"errors","tpe":{"dataType":"text","fullDataType":"text","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"finished_at","tpe":{"dataType":"timestamp without time zone","fullDataType":"timestamp","characterMaximumLength":null,"family":"dateTime","arity":"nullable"},"default":null,"autoIncrement":false},{"name":"name","tpe":{"dataType":"text","fullDataType":"text","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"revision","tpe":{"dataType":"integer","fullDataType":"int4","characterMaximumLength":null,"family":"int","arity":"required"},"default":{"SEQUENCE":"nextval('\\"_Migration_revision_seq\\"'::regclass)"},"autoIncrement":true},{"name":"rolled_back","tpe":{"dataType":"integer","fullDataType":"int4","characterMaximumLength":null,"family":"int","arity":"required"},"default":null,"autoIncrement":false},{"name":"started_at","tpe":{"dataType":"timestamp without time zone","fullDataType":"timestamp","characterMaximumLength":null,"family":"dateTime","arity":"required"},"default":null,"autoIncrement":false},{"name":"status","tpe":{"dataType":"text","fullDataType":"text","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false}],"indices":[],"primaryKey":{"columns":["revision"],"sequence":{"name":"_Migration_revision_seq","initialValue":1,"allocationSize":1},"constraintName":"_Migration_pkey"},"foreignKeys":[]}],"enums":[],"sequences":[{"name":"_Migration_revision_seq","initialValue":1,"allocationSize":1}]},"after":{"tables":[{"name":"Ppl","columns":[{"name":"email","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"id","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"password","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"role","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"status","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"boolean","arity":"required"},"default":{"VALUE":true},"autoIncrement":false},{"name":"username","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false}],"indices":[{"name":"Ppl.email","columns":["email"],"tpe":"unique"}],"primaryKey":{"columns":["id"],"sequence":null,"constraintName":null},"foreignKeys":[]},{"name":"Product","columns":[{"name":"id","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"name","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false}],"indices":[],"primaryKey":{"columns":["id"],"sequence":null,"constraintName":null},"foreignKeys":[]}],"enums":[],"sequences":[]},"original_steps":[{"CreateTable":{"table":{"name":"Ppl","columns":[{"name":"email","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"id","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"password","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"role","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"status","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"boolean","arity":"required"},"default":{"VALUE":true},"autoIncrement":false},{"name":"username","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false}],"indices":[{"name":"Ppl.email","columns":["email"],"tpe":"unique"}],"primaryKey":{"columns":["id"],"sequence":null,"constraintName":null},"foreignKeys":[]}}},{"CreateTable":{"table":{"name":"Product","columns":[{"name":"id","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"name","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false}],"indices":[],"primaryKey":{"columns":["id"],"sequence":null,"constraintName":null},"foreignKeys":[]}}},{"CreateIndex":{"table":"Ppl","index":{"name":"Ppl.email","columns":["email"],"tpe":"unique"}}}],"corrected_steps":[{"CreateTable":{"table":{"name":"Ppl","columns":[{"name":"email","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"id","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"password","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"role","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"status","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"boolean","arity":"required"},"default":{"VALUE":true},"autoIncrement":false},{"name":"username","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false}],"indices":[{"name":"Ppl.email","columns":["email"],"tpe":"unique"}],"primaryKey":{"columns":["id"],"sequence":null,"constraintName":null},"foreignKeys":[]}}},{"CreateTable":{"table":{"name":"Product","columns":[{"name":"id","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false},{"name":"name","tpe":{"dataType":"","fullDataType":"","characterMaximumLength":null,"family":"string","arity":"required"},"default":null,"autoIncrement":false}],"indices":[],"primaryKey":{"columns":["id"],"sequence":null,"constraintName":null},"foreignKeys":[]}}},{"CreateIndex":{"table":"Ppl","index":{"name":"Ppl.email","columns":["email"],"tpe":"unique"}}}],"rollback":[{"DropTable":{"name":"Ppl"}},{"DropTable":{"name":"Product"}}]}	[]	2020-07-24 21:15:19.964	2020-07-24 21:15:19.98
\.


--
-- Name: _Migration_revision_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."_Migration_revision_seq"', 1, true);


--
-- Name: Ppl Ppl_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Ppl"
    ADD CONSTRAINT "Ppl_pkey" PRIMARY KEY (id);


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);


--
-- Name: _Migration _Migration_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."_Migration"
    ADD CONSTRAINT "_Migration_pkey" PRIMARY KEY (revision);


--
-- Name: Ppl.email; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "Ppl.email" ON public."Ppl" USING btree (email);


--
-- PostgreSQL database dump complete
--

