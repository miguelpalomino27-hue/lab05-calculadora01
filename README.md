# Lab05 - Intranet UNSCH

## Descripción

Proyecto desarrollado para el curso de Pruebas y Aseguramiento de Calidad de Software.

Se implementaron pruebas unitarias utilizando Jest para validar distintos módulos de la Intranet UNSCH mediante la metodología TDD (Test Driven Development).

## Tecnologías utilizadas

* JavaScript
* Node.js
* Jest
* Git
* GitHub
* Visual Studio Code

## Estructura del proyecto

```text
src
├── matricula
├── notas
├── pagos
└── historial

tests
├── TC-MAT-001.test.js
├── TC-MAT-002.test.js
├── TC-MAT-011.test.js
├── TC-NOT-003.test.js
├── TC-NOT-004.test.js
├── TC-PAG-005.test.js
├── TC-PAG-006.test.js
├── TC-PAG-012.test.js
├── TC-HIS-007.test.js
└── TC-HIS-008.test.js
```

## Casos de prueba implementados

### Matrícula

* TC-MAT-001: Matrícula con 22 créditos (válido)
* TC-MAT-002: Matrícula con 23 créditos (inválido)
* TC-MAT-011: Cruce de horarios (inválido)

### Notas

* TC-NOT-003: Consulta de notas 2026-I
* TC-NOT-004: Consulta de notas sin registros

### Pagos

* TC-PAG-005: Estado solvente
* TC-PAG-006: Estado con deuda
* TC-PAG-012: Moroso no puede generar documentos

### Historial Académico

* TC-HIS-007: Historial académico disponible
* TC-HIS-008: Historial académico sin registros

## Ejecución del proyecto

Instalar dependencias:

```bash
npm install
```

Ejecutar pruebas:

```bash
npm test
```

## Resultado esperado

```text
Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total

<img width="1910" height="1024" alt="image" src="https://github.com/user-attachments/assets/225d12e1-cd79-419f-8d5c-fc11741e9209" />
