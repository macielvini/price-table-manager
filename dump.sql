--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.10.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.10.1)

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
-- Name: fees; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fees (
    id integer NOT NULL,
    institution_id integer,
    initial_fee numeric(5,2) NOT NULL,
    monthly_fee numeric(5,2) NOT NULL,
    name character varying(55) NOT NULL,
    max_num_installments integer NOT NULL,
    CONSTRAINT fees_max_num_installments_check CHECK ((max_num_installments > 1))
);


--
-- Name: fees_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.fees_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: fees_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.fees_id_seq OWNED BY public.fees.id;


--
-- Name: institutions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.institutions (
    id integer NOT NULL,
    name character varying(55) NOT NULL
);


--
-- Name: institution_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.institution_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: institution_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.institution_id_seq OWNED BY public.institutions.id;


--
-- Name: items; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.items (
    id integer NOT NULL,
    name character varying(55) NOT NULL,
    price integer NOT NULL
);


--
-- Name: items_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.items_id_seq OWNED BY public.items.id;


--
-- Name: fees id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fees ALTER COLUMN id SET DEFAULT nextval('public.fees_id_seq'::regclass);


--
-- Name: institutions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.institutions ALTER COLUMN id SET DEFAULT nextval('public.institution_id_seq'::regclass);


--
-- Name: items id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.items ALTER COLUMN id SET DEFAULT nextval('public.items_id_seq'::regclass);


--
-- Data for Name: fees; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.fees VALUES (1, 2, 0.00, 1.10, '1x-12x', 12);
INSERT INTO public.fees VALUES (2, 2, 3.00, 2.20, 'boleto 1x-15x', 15);
INSERT INTO public.fees VALUES (5, 3, 0.00, 0.89, 'Credit Card 1x-12x', 12);


--
-- Data for Name: institutions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.institutions VALUES (1, 'test');
INSERT INTO public.institutions VALUES (2, 'PagBank');
INSERT INTO public.institutions VALUES (3, 'institution vini');


--
-- Data for Name: items; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.items VALUES (1, 'test', 10000);
INSERT INTO public.items VALUES (2, 'test2', 1090);
INSERT INTO public.items VALUES (3, 'test3', 2009);
INSERT INTO public.items VALUES (4, 'Meu item', 15990);


--
-- Name: fees_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.fees_id_seq', 5, true);


--
-- Name: institution_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.institution_id_seq', 3, true);


--
-- Name: items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.items_id_seq', 4, true);


--
-- Name: fees fees_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fees
    ADD CONSTRAINT fees_pkey PRIMARY KEY (id);


--
-- Name: institutions institution_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.institutions
    ADD CONSTRAINT institution_pkey PRIMARY KEY (id);


--
-- Name: items items_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_pkey PRIMARY KEY (id);


--
-- Name: fees fees_institution_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fees
    ADD CONSTRAINT fees_institution_id_fkey FOREIGN KEY (institution_id) REFERENCES public.institutions(id);


--
-- PostgreSQL database dump complete
--

