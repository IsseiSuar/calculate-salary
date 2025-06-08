# 💼 Calculadora de Salario Mensual

Esta es una pequeña aplicación web creada con **React + Vite + TypeScript** que te permite calcular tu salario mensual en base a:

- Horas trabajadas semanalmente
- Salario mensual total
- Horas trabajadas diariamente
- Días con llegadas tarde (afectan el salario)

---

## 🚀 Demo

> Aún no desplegado. Puedes clonar el repositorio y correrlo localmente. (Ver instrucciones abajo)

---

## 📸 Capturas de pantalla

(Si deseas agregar capturas de pantalla, puedes usar esta sección)

---

## 🧮 ¿Cómo se calcula el salario?

La fórmula general es:

Salario mensual = (horas semanales × valor hora) + horas extra - penalización por llegadas tarde


- **Valor hora** se obtiene de: `salario mensual / (horas semanales × 4.33)`
- **Horas extra**: Se pagan a 1.5x si superan 45 horas semanales.
- **Llegadas tarde**: Se descuenta 50% del valor hora por cada día registrado.

---

## 🛠️ Tecnologías utilizadas

- ⚛️ React
- ⚡ Vite
- 📘 TypeScript
- 💅 Material UI

---

## 📦 Instalación

1. Clona este repositorio

```bash
git clone https://github.com/tuusuario/nombre-del-repo.git
cd nombre-del-repo
