# 📊 REPORTE DE CALIDAD DE SOFTWARE

## 🧑‍💻 Autor
Miguel Palomino Cárdenas  

## 📌 Proyecto
Calculadora01 — Evaluación de Calidad  

---

## 🎯 1. Introducción

El presente informe describe el proceso de aseguramiento de calidad aplicado al sistema Calculadora01, desarrollado como parte del laboratorio de Ingeniería de Software.

Se implementaron prácticas de testing automatizado e integración continua para garantizar la confiabilidad del sistema.

---

## 🔄 2. Ciclo de Vida del Software

Se aplicó un modelo iterativo con las siguientes fases:

- Análisis de requerimientos
- Diseño del sistema
- Implementación
- Pruebas
- Integración continua

---

## 🧪 3. Pruebas Unitarias

Se desarrollaron pruebas unitarias utilizando Jest.

### ✔️ Casos evaluados:
- Suma
- Resta
- Multiplicación
- División

### ✔️ Resultados:
- Pruebas ejecutadas correctamente
- Sin errores críticos

---

## 🔗 4. Pruebas de Integración

Se validó la correcta interacción entre módulos:

- Entrada de datos
- Procesamiento
- Salida de resultados

---

## ⚙️ 5. Integración Continua

Se implementó GitHub Actions para automatizar:

- Ejecución de pruebas
- Validación del código en cada push

Esto permite detectar errores de forma temprana.

---

## 📈 6. Quality Gate

Criterios establecidos:

- ✔️ Pruebas exitosas
- ✔️ Cobertura mínima aceptable
- ✔️ Sin errores críticos

Resultado: ✅ APROBADO

---

## 📊 7. Resultados

- Sistema estable
- Código validado automáticamente
- Flujo CI/CD funcional

---

## 🎯 8. Conclusiones

El uso de herramientas como Jest y GitHub Actions permite mejorar significativamente la calidad del software.

Se recomienda integrar herramientas adicionales como SonarCloud para análisis estático avanzado.

---

## 📌 9. Recomendaciones

- Implementar pruebas E2E
- Aumentar cobertura
- Integrar análisis de seguridad